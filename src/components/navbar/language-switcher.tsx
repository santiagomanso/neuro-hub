/**
 * v0 by Vercel.
 * @see https://v0.dev/t/As6YLx7xTLa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Assets } from '@/assets';
import { useState } from 'react';

const portuGueseContent = (
  <div className='flex items-center gap-2'>
    <Assets.icons.Brasil className='h-8 w-8' />
    Português
  </div>
);

const spanishContent = (
  <div className='flex items-center gap-2'>
    <Assets.icons.Spain className='h-8 w-8' />
    Spanish
  </div>
);

const englishContent = (
  <div className='flex items-center gap-2'>
    <Assets.icons.Usa className='h-8 w-8' />
    English
  </div>
);

const germanContent = (
  <div className='flex items-center gap-2'>
    <Assets.icons.Germany className='h-8 w-8' />
    German
  </div>
);

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<string>('english');

  const getContent = React.useCallback((language: string) => {
    switch (language) {
      case 'spanish':
        return spanishContent;
      case 'english':
        return englishContent;
      case 'german':
        return germanContent;
      case 'portuguese':
        return portuGueseContent;
      default:
        return spanishContent;
    }
  }, []);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center justify-start gap-2 w-full'
        >
          {getContent(language)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => setLanguage('portuguese')}>
            {portuGueseContent}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setLanguage('spanish')}>
            {spanishContent}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setLanguage('english')}>
            {englishContent}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setLanguage('german')}>
            {germanContent}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
