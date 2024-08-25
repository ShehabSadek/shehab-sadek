import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useTheme } from 'next-themes';

const SkillCard = ({ skill }: { skill: { name: string; image: string } }) => {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    let src;
    try {
      if (theme === 'light') {
        src = require(`@/images/skills${skill.image}-light.svg`).default;
      } else {
        src = require(`@/images/skills${skill.image}.svg`).default;
      }
    } catch (error) {
      src = require(`@/images/skills${skill.image}.svg`).default;
    }
    setImageSrc(src);
  }, [theme, skill.image]);

  return (
    <Card className="w-44 h-44 p-2 bg-slate-100 dark:bg-slate-800 shadow-inner">
      <CardContent className="p-0 flex justify-center content-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={skill.name}
            className="h-20 w-auto mb-2 object-contain"
            loading="lazy"
          />
        ) : (
          <Skeleton className="w-20 h-24 mb-2" style={{ borderRadius: '50%' }} />
        )}
      </CardContent>
      <CardFooter className="mt-6 justify-center content-center">
        <p>{skill.name}</p>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
