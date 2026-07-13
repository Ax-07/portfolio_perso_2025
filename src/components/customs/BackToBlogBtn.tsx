import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const BackToBlogBtn = () => {
    return (
        <div className="relative flex items-center gap-4 mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blogs
            </Link>
          </Button>
        </div>
    );
};

export default BackToBlogBtn;