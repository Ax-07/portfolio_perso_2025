"use client";

import { Badge } from "@/components/ui/badge";
import { getTechBadgeColor, TECH_BADGE_COLORS } from "@/lib/project-utils";

interface TechBadgeProps {
  technology: string;
  category?: keyof typeof TECH_BADGE_COLORS;
  size?: "sm" | "default";
}

export function TechBadge({ technology, category = "default", size = "default" }: TechBadgeProps) {
  const colorClasses = getTechBadgeColor(category);
  const sizeClasses = size === "sm" ? "text-xs" : "text-sm";
  
  return (
    <Badge 
      variant="secondary" 
      className={`${colorClasses} ${sizeClasses}`}
    >
      {technology}
    </Badge>
  );
}
