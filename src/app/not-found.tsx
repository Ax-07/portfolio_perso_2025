import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Illustration de la 404 */}
          <div className="relative">
            <p className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none select-none">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className=" bg-clip-text text-primary text-4xl md:text-6xl font-bold">
                Oups !
              </p>
            </div>
          </div>

          {/* Message d'erreur */}
          <Card className="mx-auto max-w-lg">
            <CardContent className="p-8 space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Page introuvable
              </h1>
              <p className="text-muted-foreground text-lg">
                La page que vous recherchez n&apos;existe pas ou a été déplacée.
              </p>
              <p className="text-sm text-muted-foreground">
                Vérifiez l&apos;URL ou naviguez vers une autre section du site.
              </p>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Retour à l&apos;accueil
              </Link>
            </Button>
          </div>
        </div>
      </main>
  );
}
