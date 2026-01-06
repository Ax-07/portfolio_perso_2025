"use client";

import React from 'react';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '@/lib/utils';

const ScrollToTopBtn = () => {
    return (
      <Button variant="outline" size="sm" className="fixed bottom-4 right-4" onClick={() => scrollToTop()}>
          <ArrowUp className="h-4 w-4 mr-2" />
          Haut de page
      </Button>
    );
};

export default ScrollToTopBtn;