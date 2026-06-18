import type { Metadata } from "next";
import { BookOpen, FolderOpen, UserRound, UsersRound } from "lucide-react";
import { resourceCenter } from "@/lib/content";

export const metadata: Metadata = {
  title: "Member Dashboard",
  description:
    "World Impact Initiative member dashboard with profile management, directory, and resource center."
};

export default function DashboardPage() {
  return (
    <section className="section bg-[#F7F9FC]">
      <div className="container">
        <p className="eyebrow">Dashboard</p>
        <h1 className="section-title mt-3">Membership operations center.</h1>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="card p-7">
            <UserRound className="text-[#0F4C81]" aria-hidden />
            <h2 className="mt-5 text-2xl font-black">Profile Management</h2>
            <p className="mt-3 leading-7 text-slate-600">Update contact details, skills, location, and service interests.</p>
          </article>
          <article className="card p-7">
            <UsersRound className="text-[#0F4C81]" aria-hidden />
            <h2 className="mt-5 text-2xl font-black">Membership Directory</h2>
            <p className="mt-3 leading-7 text-slate-600">Search verified members, volunteers, coordinators, and partner contacts.</p>
          </article>
          <article className="card p-7">
            <FolderOpen className="text-[#0F4C81]" aria-hidden />
            <h2 className="mt-5 text-2xl font-black">Assignments</h2>
            <p className="mt-3 leading-7 text-slate-600">Track program participation, event registrations, and volunteer tasks.</p>
          </article>
        </div>
        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-900/10">
          <div className="flex items-center gap-3">
            <BookOpen className="text-[#0F4C81]" aria-hidden />
            <h2 className="text-3xl font-black">Resource Center</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {resourceCenter.map((resource) => (
              <div key={resource} className="rounded-3xl bg-[#F7F9FC] p-5 font-bold text-slate-700">
                {resource}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
