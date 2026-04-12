import React from 'react';

export interface WritingEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  component: React.LazyExoticComponent<React.ComponentType>;
}

// Add new writings here. Each entry maps a slug to a lazy-loaded component.
// Example:
// {
//   slug: 'mi-primer-escrito',
//   title: 'Mi primer escrito',
//   description: 'Una breve descripción del escrito.',
//   date: '2026-04-12',
//   component: React.lazy(() => import('./MiPrimerEscrito')),
// },
export const writings: WritingEntry[] = [
  {
    slug: 'ahora-de-juego',
    title: 'Ahora de juego',
    description: 'Postulados sobre el juego en la clínica psicoanalítica con niños.',
    date: 'Junio 2023',
    component: React.lazy(() => import('./AhoraDeJuego')),
  },
];
