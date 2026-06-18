import type { Metadata } from "next";
import Link from "next/link";
import {
  Database, Search, Filter, Plus, Eye, Edit, Trash2,
  ChevronLeft, Download, Upload,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Beneficiary Database — Admin",
  description: "Admin-only beneficiary database management for World Impact Initiative.",
};

const beneficiaries = [
  { id: "B001", name: "Amina Saleh", dob: "1998-03-15", gender: "Female", country: "Nigeria", program: "Gender Equality", status: "active", manager: "Sarah K." },
  { id: "B002", name: "James Tendo", dob: "2011-07-22", gender: "Male", country: "Uganda", program: "Child Protection", status: "active", manager: "David M." },
  { id: "B003", name: "Maria Cruz", dob: "2005-11-08", gender: "Female", country: "Philippines", program: "Disability Inclusion", status: "graduated", manager: "Anna L." },
  { id: "B004", name: "Kwame Asante", dob: "2002-05-30", gender: "Male", country: "Ghana", program: "Youth Empowerment", status: "active", manager: "Peter O." },
  { id: "B005", name: "Fatima Rahim", dob: "1985-09-12", gender: "Female", country: "Pakistan", program: "Crisis Response", status: "active", manager: "Rania A." },
  { id: "B006", name: "Grace Osei", dob: "1990-02-28", gender: "Female", country: "Kenya", program: "Health & Education", status: "active", manager: "Sarah K." },
  { id: "B007", name: "Carlos Diaz", dob: "2008-06-14", gender: "Male", country: "Guatemala", program: "Child Protection", status: "inactive", manager: "Maria V." },
  { id: "B008", name: "Priya Sharma", dob: "1995-12-03", gender: "Female", country: "India", program: "Gender Equality", status: "graduated", manager: "Sarah K." },
];

const programColors: Record<string, string> = {
  "Gender Equality": "bg-purple-100 text-purple-700",
  "Child Protection": "bg-blue-100 text-blue-700",
  "Youth Empowerment": "bg-amber-100 text-amber-700",
  "Disability Inclusion": "bg-green-100 text-green-700",
  "Crisis Response": "bg-red-100 text-red-700",
  "Health & Education": "bg-teal-100 text-teal-700",
};

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-gray-100 text-gray-600",
  graduated: "bg-blue-100 text-blue-700",
};

export default function BeneficiariesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/admin" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </Link>
              <div>
                <p className="text-gray-400 text-xs">Admin Portal</p>
                <h1 className="text-xl font-heading font-bold">Beneficiary Database</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                <Upload className="w-4 h-4" />
                Import
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-gold text-primary font-semibold rounded-lg text-sm hover:bg-gold/90 transition-colors">
                <Plus className="w-4 h-4" />
                Add Beneficiary
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Search & Filter Bar */}
        <div className="card p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search beneficiaries by name, ID, country..."
                className="input-field pl-10 text-sm"
                aria-label="Search beneficiaries"
              />
            </div>
            <div className="flex gap-2">
              <select className="input-field text-sm w-48">
                <option value="">All Programs</option>
                <option>Gender Equality</option>
                <option>Child Protection</option>
                <option>Youth Empowerment</option>
                <option>Disability Inclusion</option>
                <option>Crisis Response</option>
                <option>Health & Education</option>
              </select>
              <select className="input-field text-sm w-36">
                <option value="">All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Graduated</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-600 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Beneficiaries", value: "2,847", color: "text-primary" },
            { label: "Active", value: "1,934", color: "text-green-600" },
            { label: "Graduated", value: "698", color: "text-blue-600" },
            { label: "Inactive", value: "215", color: "text-gray-500" },
          ].map((stat) => (
            <div key={stat.label} className="card p-4 text-center">
              <p className={`text-2xl font-heading font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">ID</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Country</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Program</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Manager</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {beneficiaries.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-gray-400">{b.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{b.name}</p>
                        <p className="text-xs text-gray-400">{b.gender}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{b.country}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${programColors[b.program] || "bg-gray-100 text-gray-600"}`}>
                        {b.program}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{b.manager}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          aria-label={`View ${b.name}'s record`}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors"
                          aria-label={`Edit ${b.name}'s record`}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label={`Delete ${b.name}'s record`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">Showing 1–8 of 2,847 records</p>
            <div className="flex gap-1">
              {[1, 2, 3, "...", 356].map((page, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    page === 1
                      ? "bg-primary text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
