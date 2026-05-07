import React from 'react';
import { DollarSign } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="flex-center flex-col" style={{ minHeight: '60vh' }}>
      <DollarSign size={80} opacity={0.2} />
      <h1 style={{ marginTop: '2rem' }}>404 - Página no encontrada</h1>
      <p className="text-muted">La página que buscas no existe</p>
    </div>
  );
};
