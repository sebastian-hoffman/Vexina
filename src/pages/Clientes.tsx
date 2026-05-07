import React from 'react';
import { clientes } from '../data/mockData';
import { Mail } from 'lucide-react';

export const Clientes: React.FC = () => {
  return (
    <div>
      <div className="flex-between mb-4">
        <div>
          <h1>Clientes</h1>
          <p className="text-muted">Gestión de legajos y datos de clientes</p>
        </div>
        <button className="btn btn-primary">+ Nuevo Cliente</button>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>CUIT</th>
              <th>Tipo</th>
              <th>Contacto</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>
                  <strong>{cliente.name}</strong>
                  <br />
                  <span className="text-muted text-small">{cliente.email}</span>
                </td>
                <td>{cliente.cuit}</td>
                <td>
                  <span className="badge badge-info">{cliente.tipo}</span>
                </td>
                <td>
                  <div className="text-small">
                    <div className="flex-center gap-1" style={{ marginBottom: '0.25rem' }}>
                      <Mail size={14} /> {cliente.contacto}
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`badge badge-${cliente.estado === 'activo' ? 'success' : 'warning'}`}>
                    {cliente.estado}
                  </span>
                </td>
                <td>
                  <button className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>Ver Legajo</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
