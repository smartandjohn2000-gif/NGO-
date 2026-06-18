import { createClient } from "@/lib/supabase/server";
import { BeneficiaryManager } from "@/components/admin/BeneficiaryManager";

export default async function BeneficiariesPage() {
  const supabase = await createClient();
  const { data: beneficiaries } = await supabase
    .from("beneficiaries")
    .select("*, programs(title, slug)")
    .order("created_at", { ascending: false });

  const { data: programs } = await supabase.from("programs").select("id, title, slug");

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Beneficiary Database</h2>
      <p className="text-muted text-sm mb-6">Admin-only access. Manage beneficiary records, program assignments, and case notes.</p>
      <BeneficiaryManager
        initialBeneficiaries={beneficiaries || []}
        programs={programs || []}
      />
    </div>
  );
}
