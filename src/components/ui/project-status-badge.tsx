"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { PROJECT_STATUS_CONFIG } from "@/lib/project-utils";

interface ProjectStatusBadgeProps {
  status: string;
  size?: "sm" | "default";
}

const STATUS_ICONS = {
  CheckCircle,
  Clock,
  Calendar
} as const;

export function ProjectStatusBadge({ status, size = "default" }: ProjectStatusBadgeProps) {
  const config = PROJECT_STATUS_CONFIG[status as keyof typeof PROJECT_STATUS_CONFIG] || PROJECT_STATUS_CONFIG["Planifié"];
  const IconComponent = STATUS_ICONS[config.iconName as keyof typeof STATUS_ICONS];
  
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  
  return (
    <Badge variant="outline" className={config.color}>
      <IconComponent className={`${iconSize} mr-1`} />
      {status}
    </Badge>
  );
}
