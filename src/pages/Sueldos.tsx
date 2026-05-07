import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

export const Sueldos: React.FC = () => {
  return (
    <div>
      <div className="flex-between mb-4">
        <div>
          <h1>Liquidación de Sueldos</h1>
          <p className="text-muted">Gestión y presentación de obligaciones salariales</p>
        </div>
        <button className="btn btn-primary">+ Nuevo Período</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <DollarSign size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Cálculos Mensuales</h3>
          <p className="text-muted">Procesar liquidaciones de personal</p>
          <button className="btn btn-secondary mt-2">Ir</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <TrendingUp size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Contribuciones</h3>
          <p className="text-muted">Presentación de aportes AFIP y ART</p>
          <button className="btn btn-secondary mt-2">Ir</button>
        </div>
      </div>

      <div className="card mt-4">
        <h3>Períodos Registrados</h3>
        <p className="text-muted mt-2">Próximamente se mostrarán los períodos de liquidación</p>
      </div>
    </div>
  );
};
