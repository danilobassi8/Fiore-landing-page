import React, { Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { writings } from '../writings/registry';

const WritingPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = writings.find((w) => w.slug === slug);

  if (!entry) {
    return <Navigate to="/escritos" replace />;
  }

  const WritingComponent = entry.component;

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <Suspense fallback={<p className="text-gray-400">Cargando...</p>}>
          <WritingComponent />
        </Suspense>
      </div>
    </section>
  );
};

export default WritingPage;
