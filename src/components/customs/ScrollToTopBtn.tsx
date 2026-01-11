"use client";

import React from 'react';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '@/lib/utils';

const ScrollToTopBtn = () => {
    return (
      <Button variant="outline" size="sm" className="fixed z-50 bottom-16 right-16" onClick={() => scrollToTop()}>
          <ArrowUp className="h-4 w-4 mr-2" />
          Haut de page
      </Button>
    );
};

export default ScrollToTopBtn;