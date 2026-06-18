import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard, Users, Heart, Database, FileText,
  Calendar, Settings, Shield, TrendingUp, AlertCircle,
  CheckCircle2, Globe, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "World Impact Initiative admin dashboard.",
};

const roles = [
  { name: "Super Admin", color: "bg-red-100 text-red-700", icon: Shield },
  { name: "Program Manager", color: "bg-blue-100 text-blue-700", icon: Globe },
  { name: "Content Editor", color: "bg-green-100 text-green-700", icon: FileText },
  { name: "Volunteer Coordinator", color: "bg-amber-100 text-amber-700", icon: Users },
];

const dashboardStats = [
  { label: "Total Beneficiaries", value: "2,847", change: "+124 this month", icon: Database, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Active Volunteers", value: "523", change: "+38 this month", icon: Users, color: "text-green-500", bg: "bg-green-50" },
  { label: "Total Donations", value: "$127,450", change: "+$12,300 this month", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  { label: "Programs Active", value: "6", change: "All running", icon: Globe, color: "text-primary", bg: "bg-primary/10" },
];

const quickLinks = [
  { href: "/admin/beneficiaries", icon: Database, label: "Beneficiary Database", desc: "Manage beneficiary records and case notes" },
  { href: "/admin/volunteers", icon: Users, label: "Volunteer Management", desc: "Review and approve volunteer applications" },
  { href: "/admin/contacts", icon: FileText, label: "Contact Submissions", desc: "View and respond to contact form messages" },
  { href: "/admin/events", icon: Calendar, label: "Events Management", desc: "Create and manage events and registrations" },
  { href: "/admin/blog", icon: FileText, label: "Blog Management", desc: "Create and publish blog posts and news" },
  { href: "/admin/users", icon: Shield, label: "User & Role Management", desc: "Manage admin users and permissions" },
];

const recentActivity = [
  { type: "volunteer", text: "New volunteer application from Sarah M. (Canada)", time: "2 hours ago", icon: Users, color: "text-green-500" },
  { type: "contact", text: "New partnership inquiry from Global Health Corp", time: "4 hours ago", icon: FileText, color: "text-blue-500" },
  { type: "beneficiary", text: "Beneficiary record updated — James T. (Uganda)", time: "6 hours ago", icon: Database, color: "text-primary" },
  { type: "donation", text: "Donation received — $500 for Child Protection", time: "8 hours ago", icon: Heart, color: "text-rose-500" },
  { type: "event", text: "35 registrations for Gender Equality Roundtable", time: "1 day ago", icon: Calendar, color: "text-amber-500" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Admin Header */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-gold" />
                <p className="text-gold text-sm font-semibold">Admin Portal</p>
              </div>
              <h1 className="text-2xl font-heading font-bold">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm mt-1">World Impact Initiative — Operations Center</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary font-bold">A</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Role Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-sm text-gray-500 mr-2">Admin Roles:</span>
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <span key={role.name} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${role.color}`}>
                <Icon className="w-3 h-3" />
                {role.name}
              </span>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="card p-5">
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-heading font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-0.5">{stat.label}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {stat.change}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="card p-6 mb-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5">Management Modules</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon className="w-4 h-4 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-primary">{link.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary mt-1" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Pending Alerts */}
            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-4">Pending Actions</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-amber-800">12 volunteer applications pending review</p>
                  </div>
                  <Link href="/admin/volunteers" className="text-xs text-amber-600 font-semibold hover:text-amber-800">
                    Review
                  </Link>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <AlertCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-800">5 contact submissions unread</p>
                  </div>
                  <Link href="/admin/contacts" className="text-xs text-blue-600 font-semibold hover:text-blue-800">
                    View
                  </Link>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-800">All programs running at full capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Recent Activity */}
            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-700 leading-relaxed">{item.text}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Settings Link */}
            <div className="card p-4">
              <Link
                href="/admin/settings"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">System Settings</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
