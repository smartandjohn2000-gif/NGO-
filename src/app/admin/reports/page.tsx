export default function ReportsPage() {
  const reports = [
    { title: "Beneficiary Summary", period: "Q1 2026", status: "Ready" },
    { title: "Program Impact Report", period: "2025", status: "Ready" },
    { title: "Volunteer Activity", period: "Q1 2026", status: "Ready" },
    { title: "Financial Overview", period: "2025", status: "Pending" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Reporting Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((report) => (
          <div key={report.title} className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold text-primary">{report.title}</h3>
            <p className="text-muted text-sm mt-1">{report.period}</p>
            <span className={`inline-block mt-3 text-xs px-2 py-1 rounded-full ${report.status === "Ready" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
