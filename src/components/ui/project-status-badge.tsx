"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, Archive, PauseCircle } from "lucide-react";
import { PROJECT_STATUS_CONFIG } from "@/lib/project-utils";
import { ProjectStatus } from "@/types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  size?: "sm" | "default";
}

const STATUS_ICONS = {
  CheckCircle,
  Clock,
  Calendar,
  Archive,
  PauseCircle,
} as const;

export function ProjectStatusBadge({ status, size = "default" }: ProjectStatusBadgeProps) {
  const config = PROJECT_STATUS_CONFIG[status];
  const IconComponent = STATUS_ICONS[config.iconName as keyof typeof STATUS_ICONS];
  
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  
  return (
    <Badge variant="outline" className={config.color}>
      <IconComponent className={`${iconSize} mr-1`} />
      {status}
    </Badge>
  );
}
