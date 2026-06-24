import {
  Accessibility,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  ShieldCheck,
  Stethoscope,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  Accessibility,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  ShieldCheck,
  Stethoscope,
};

type IconName = keyof typeof iconMap;

type DynamicIconProps = LucideProps & {
  name: IconName;
};

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = iconMap[name];
  return <Icon {...props} />;
}
