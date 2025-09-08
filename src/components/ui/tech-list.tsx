"use client";

import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { getAllTechnologies } from "@/lib/project-utils";
import { Project } from "@/types/project";

interface TechListProps {
  technologies: Project['technologies'];
  maxVisible?: number;
  size?: "sm" | "default";
  showCounter?: boolean;
}

export function TechList({ 
  technologies, 
  maxVisible = 3, 
  size = "default",
  showCounter = true 
}: TechListProps) {
  const allTechs = getAllTechnologies(technologies);
  const visibleTechs = allTechs.slice(0, maxVisible);
  const remainingCount = allTechs.length - maxVisible;
  
  return (
    <div className="flex flex-wrap gap-1">
      {visibleTechs.map((tech, index) => (
        <TechBadge 
          key={index} 
          technology={tech}
          category="default"
          size={size}
        />
      ))}
      
      {showCounter && remainingCount > 0 && (
        <Badge variant="secondary" className={size === "sm" ? "text-xs" : "text-sm"}>
          +{remainingCount}
        </Badge>
      )}
    </div>
  );
}
