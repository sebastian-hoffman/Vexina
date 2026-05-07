import React from 'react';
import { Users, Lock, FileText, Bell } from 'lucide-react';

export const PortalClientes: React.FC = () => {
  return (
    <div>
      <h1>Portal de Clientes</h1>
      <p className="text-muted">Vista de cliente para acceso a documentación y seguimiento de servicios</p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <Lock size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Área Privada</h3>
          <p className="text-muted">Acceso restringido a datos del cliente</p>
          <button className="btn btn-secondary mt-2">Configurar</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <FileText size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Documentos</h3>
          <p className="text-muted">Descarga de balances, DDJJ, etc.</p>
          <button className="btn btn-secondary mt-2">Ver</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <Bell size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Notificaciones</h3>
          <p className="text-muted">Alertas de vencimientos y cambios</p>
          <button className="btn btn-secondary mt-2">Configurar</button>
        </div>

        <div className="card flex-center flex-col" style={{ padding: '2rem' }}>
          <Users size={48} color="var(--accent)" />
          <h3 style={{ marginTop: '1rem' }}>Colaboradores</h3>
          <p className="text-muted">Gestión de acceso para otros usuarios</p>
          <button className="btn btn-secondary mt-2">Administrar</button>
        </div>
      </div>
    </div>
  );
};
