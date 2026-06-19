import { DEPARTMENT_CONTACTS, type ContactDepartmentKey } from "@/lib/constants";

export function getDepartmentByKey(key: ContactDepartmentKey) {
  return DEPARTMENT_CONTACTS.find((department) => department.key === key) ?? DEPARTMENT_CONTACTS[0];
}

export function getDepartmentRecipientList(key: ContactDepartmentKey) {
  const selectedDepartment = getDepartmentByKey(key);
  return [selectedDepartment.email];
}
