import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useTheme } from 'next-themes';

const ContactCard = ({ contact }: { contact: { title: string; image: string,"link": string } }) => {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        let src;
        if (theme === 'light') {
          src = require(`@/images/contact${contact.image}-light.svg`).default;
        } else {
          src = require(`@/images/contact${contact.image}.svg`).default;
        }
        setImageSrc(src);
      } catch (error) {
        console.error('Image loading error:', error);
        const fallbackSrc = require(`@/images/contact${contact.image}.svg`).default;
        setImageSrc(fallbackSrc);
      }
    }
  }, [theme, contact.image]);

  return (
    <a href={contact.link}>
    <Card className="w-44 h-44 p-2 bg-slate-100 dark:bg-slate-800 shadow-inner">
      <CardContent className="p-0 flex justify-center content-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={contact.title}
            className="h-20 w-auto mb-2 object-contain"
            loading="lazy"
            width={80}
            height={80}
          />
        ) : (
          <Skeleton className="w-20 h-24 mb-2" style={{ borderRadius: '50%' }} />
        )}
      </CardContent>
      <CardFooter className="mt-4 justify-center content-center">
        <p className="text-center break-words max-w-full">
            {contact.title}
        </p>
      </CardFooter>
    </Card>
    </a>
  );
};

export default ContactCard;
