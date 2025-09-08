"use client";

import * as React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: "video" | "square";
  overlay?: boolean;
  overlayContent?: React.ReactNode;
}

export function ProjectImage({ 
  src, 
  alt, 
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  aspectRatio = "video",
  overlay = false,
  overlayContent
}: ProjectImageProps) {
  const [imageError, setImageError] = React.useState(false);
  
  const aspectClass = aspectRatio === "video" ? "aspect-video" : "aspect-square";
  
  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 flex items-center justify-center">
        {imageError ? (
          <div className="text-primary-600 dark:text-primary-400">
            <Globe className="h-12 w-12" />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            sizes={sizes}
            priority={priority}
          />
        )}
      </div>
      
      {/* Overlay de base */}
      {overlay && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      )}
      
      {/* Contenu de l'overlay */}
      {overlayContent && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          {overlayContent}
        </div>
      )}
    </div>
  );
}
