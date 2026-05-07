import React from 'react';
import { BarChart3, TrendingUp, FileCheck } from 'lucide-react';

export const Balances: React.FC = () => {
  return (
    <div>
      <div className="flex-between mb-4">
        <div>
          <h1>Balances y Auditoría</h1>
          <p className="text-muted">Preparación y auditoría de estados contables</p>
        </div>
        <button className="btn btn-primary">+ Nuevo Balance</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <BarChart3 size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Balances Cerrados</h3>
          <p className="text-muted">0</p>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <TrendingUp size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>En Preparación</h3>
          <p className="text-muted">0</p>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <FileCheck size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Auditados</h3>
          <p className="text-muted">0</p>
        </div>
      </div>

      <div className="card">
        <h3>Estados Contables</h3>
        <p className="text-muted mt-2">Próximamente se mostrarán los balances registrados en el sistema</p>
      </div>
    </div>
  );
};
