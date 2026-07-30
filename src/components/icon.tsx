import {
  Boxes,
  Braces,
  Brain,
  Cloud,
  CodeXml,
  Globe,
  Headset,
  LifeBuoy,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  UsersRound,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Code2: CodeXml,
  Globe,
  Smartphone,
  Brain,
  Users,
  Boxes,
  Cloud,
  PenTool,
  Braces,
  Workflow,
  LifeBuoy,
  UsersRound,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Headset,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}
