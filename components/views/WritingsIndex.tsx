import React from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../writings/registry';

const WritingsIndex: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-5xl elegant-font font-semibold tracking-tight mb-4">Escritos</h1>
        <p className="text-gray-500 text-sm mb-12">Reflexiones, artículos y textos sobre psicología.</p>

        {writings.length === 0 ? (
          <p className="text-gray-400 italic">Próximamente...</p>
        ) : (
          <div className="space-y-8">
            {writings.map((w) => (
              <Link
                key={w.slug}
                to={`/escritos/${w.slug}`}
                className="block group"
              >
                <article className="border-b border-gray-200 pb-6 transition-colors group-hover:border-[#FF8A8A]">
                  <time className="text-xs text-gray-400 uppercase tracking-widest">{w.date}</time>
                  <h2 className="text-2xl elegant-font font-medium mt-1 group-hover:text-[#FF8A8A] transition-colors">
                    {w.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">{w.description}</p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WritingsIndex;
