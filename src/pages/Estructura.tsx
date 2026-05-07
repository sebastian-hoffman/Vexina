import React from 'react';
import { Building2, Users, FileText, DollarSign } from 'lucide-react';

export const Estructura: React.FC = () => {
  return (
    <div>
      <div className="flex-between mb-4">
        <div>
          <h1>Gestión Estructural</h1>
          <p className="text-muted">Administración de estructuras societarias y designación de autoridades</p>
        </div>
        <button className="btn btn-primary">+ Nueva Constitución</button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <Building2 size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Constituciones</h3>
          <p className="text-muted">Registro y seguimiento de nuevas sociedades</p>
          <button className="btn btn-secondary mt-2">Ir</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <Users size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Autoridades</h3>
          <p className="text-muted">Designación y renovación de órganos de gobierno</p>
          <button className="btn btn-secondary mt-2">Ir</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <FileText size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Libros Societarios</h3>
          <p className="text-muted">Administración de actas y registros de asambleas</p>
          <button className="btn btn-secondary mt-2">Ir</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <DollarSign size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Aportes y Retiros</h3>
          <p className="text-muted">Control de movimientos patrimoniales de socios</p>
          <button className="btn btn-secondary mt-2">Ir</button>
        </div>
      </div>

      <div className="card">
        <h3>Últimas Operaciones</h3>
        <p className="text-muted mt-2">Próximamente se mostrarán los últimos cambios en estructuras societarias</p>
      </div>
    </div>
  );
};
