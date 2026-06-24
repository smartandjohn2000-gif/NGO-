import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import type { Database } from "@/types/database";
import { updateSession } from "@/lib/supabase/proxy";

const protectedMembershipRoutes = [
  "/membership/dashboard",
  "/membership/profile",
  "/membership/directory",
  "/membership/resources",
];

const adminRoutePrefix = "/admin";

async function getAuthStatus(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return { user: null as { id: string } | null };
  }

  const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll() {
        // Proxy session sync is handled in updateSession.
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user: user ? { id: user.id } : null };
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = await updateSession(request);

  const isProtectedMembershipRoute = protectedMembershipRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAdminRoute = pathname.startsWith(adminRoutePrefix);

  if (!isProtectedMembershipRoute && !isAdminRoute) {
    return response;
  }

  const { user } = await getAuthStatus(request);

  if (!user) {
    const loginUrl = new URL("/membership/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
