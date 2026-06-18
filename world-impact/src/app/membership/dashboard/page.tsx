import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard, Heart, Users, BookOpen, Settings,
  TrendingUp, Calendar, Bell, ArrowRight, Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Member Dashboard",
  description: "Your World Impact Initiative member dashboard.",
};

const stats = [
  { label: "Total Donated", value: "$1,250", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  { label: "Volunteer Hours", value: "48", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Programs Supported", value: "3", icon: Globe, color: "text-green-500", bg: "bg-green-50" },
  { label: "Events Attended", value: "7", icon: Calendar, color: "text-amber-500", bg: "bg-amber-50" },
];

const recentActivity = [
  { type: "donation", desc: "Donated $50 to Youth Empowerment Program", date: "June 10, 2025" },
  { type: "event", desc: "Registered for Annual Charity Gala 2025", date: "June 5, 2025" },
  { type: "volunteer", desc: "Completed 4 hours — Community Outreach Day", date: "May 28, 2025" },
  { type: "donation", desc: "Donated $100 to Gender Equality Program", date: "May 1, 2025" },
];

const resources = [
  { title: "2024 Annual Impact Report", type: "PDF", size: "2.4 MB" },
  { title: "Volunteer Handbook", type: "PDF", size: "1.1 MB" },
  { title: "Program Overview Toolkit", type: "PDF", size: "3.2 MB" },
  { title: "Fundraising Guide", type: "PDF", size: "980 KB" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Dashboard Header */}
      <div className="bg-primary text-white py-8">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gold text-sm font-semibold">Member Dashboard</p>
              <h1 className="text-2xl font-heading font-bold mt-1">Welcome back, Member</h1>
              <p className="text-white/70 text-sm mt-1">Thank you for being part of our community</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Notifications">
                <Bell className="w-5 h-5" />
              </button>
              <Link href="/membership/settings" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Settings">
                <Settings className="w-5 h-5" />
              </Link>
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-bold text-primary">
                M
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="card p-5">
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-bold text-primary">Recent Activity</h2>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                      item.type === "donation" ? "bg-rose-400" :
                      item.type === "event" ? "bg-amber-400" : "bg-blue-400"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{item.desc}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h2 className="font-heading font-bold text-primary mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/donate" className="btn-primary justify-center text-sm py-2.5 gap-2">
                  <Heart className="w-4 h-4" /> Donate Now
                </Link>
                <Link href="/volunteer" className="btn-outline justify-center text-sm py-2.5 gap-2">
                  <Users className="w-4 h-4" /> Volunteer
                </Link>
                <Link href="/events" className="btn-outline justify-center text-sm py-2.5 gap-2">
                  <Calendar className="w-4 h-4" /> Events
                </Link>
                <Link href="/contact" className="btn-outline justify-center text-sm py-2.5 gap-2">
                  <Bell className="w-4 h-4" /> Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Profile Card */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 text-primary font-bold text-xl">
                M
              </div>
              <h3 className="font-heading font-bold text-primary">Member Name</h3>
              <p className="text-sm text-gray-500">member@email.com</p>
              <p className="text-xs text-gray-400 mt-1">Canada 🇨🇦</p>
              <Link href="/membership/settings" className="btn-outline w-full justify-center text-sm mt-4 py-2">
                Edit Profile
              </Link>
            </div>

            {/* Resources */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-bold text-primary">Resources</h2>
                <BookOpen className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {resources.map((res) => (
                  <div
                    key={res.title}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-primary">{res.title}</p>
                      <p className="text-xs text-gray-400">{res.type} · {res.size}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="card p-4">
              <nav className="space-y-1">
                {[
                  { href: "/membership/dashboard", icon: LayoutDashboard, label: "Dashboard", active: true },
                  { href: "/membership/profile", icon: Users, label: "My Profile", active: false },
                  { href: "/membership/donations", icon: Heart, label: "Donations", active: false },
                  { href: "/membership/directory", icon: Globe, label: "Member Directory", active: false },
                  { href: "/membership/settings", icon: Settings, label: "Settings", active: false },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        item.active
                          ? "bg-primary/10 text-primary"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
