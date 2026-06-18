export default function ContentAdminPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Content Management</h2>
      <p className="text-muted text-sm mb-6">Manage blog posts, gallery items, and events. Content editors can create and publish articles.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Blog Posts", count: 6, href: "/blog" },
          { title: "Gallery Items", count: 15, href: "/gallery" },
          { title: "Events", count: 7, href: "/events" },
        ].map((item) => (
          <a key={item.title} href={item.href} className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="text-2xl font-bold text-accent mt-2">{item.count}</p>
            <p className="text-muted text-xs mt-1">View public page →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
