import React, { useState } from 'react';
import { papelesDeTrabajoIVA, clientes } from '../../data/mockData';
import { FileText, CheckCircle, AlertCircle, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IVA: React.FC = () => {
  const [periodo, setPeriodo] = useState('2026-04');

  const getPapelesPorEstado = (estado: string) => {
    return papelesDeTrabajoIVA.filter(p => p.estado === estado && p.periodo === periodo).length;
  };

  const getClienteNombre = (clienteId: string) => {
    return clientes.find(c => c.id === clienteId)?.name || 'Desconocido';
  };

  return (
    <div>
      <div className="flex-between mb-4">
        <div>
          <h1>Liquidación de IVA</h1>
          <p className="text-muted">Gestión integral de Declaraciones Juradas y Cálculos de IVA</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to="/iva/flujo" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={16} /> Ver Flujo Completo
          </Link>
          <button className="btn btn-primary">+ Nuevo Papel de Trabajo</button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="flex-between">
          <div>
            <label htmlFor="periodo" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              Período
            </label>
            <select
              id="periodo"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--neutral-300)' }}
            >
              <option value="2026-04">Abril 2026</option>
              <option value="2026-03">Marzo 2026</option>
              <option value="2026-02">Febrero 2026</option>
              <option value="2026-01">Enero 2026</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Borradores</p>
              <h2>{getPapelesPorEstado('borrador')}</h2>
            </div>
            <FileText size={32} opacity={0.2} />
          </div>
        </div>
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">En Revisión</p>
              <h2>{getPapelesPorEstado('en_revision')}</h2>
            </div>
            <Clock size={32} opacity={0.2} />
          </div>
        </div>
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Aprobados</p>
              <h2>{getPapelesPorEstado('aprobado')}</h2>
            </div>
            <CheckCircle size={32} opacity={0.2} />
          </div>
        </div>
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Rechazados</p>
              <h2>{getPapelesPorEstado('rechazado')}</h2>
            </div>
            <AlertCircle size={32} opacity={0.2} />
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Papeles de Trabajo - IVA {periodo}</h3>
        <div className="mt-3">
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Período</th>
                <th>Estado Actual</th>
                <th>Progreso</th>
                <th>Observaciones</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {papelesDeTrabajoIVA.filter(p => p.periodo === periodo).map(papel => {
                const estadoColores: { [key: string]: string } = {
                  'borrador': 'info',
                  'completo': 'info',
                  'validado_cliente': 'warning',
                  'en_revision': 'warning',
                  'ajuste_requerido': 'error',
                  'aprobado_tecnico': 'success',
                  'listo_presentacion': 'success',
                  'presentado': 'warning',
                  'aceptado_afip': 'success',
                  'procesado_contable': 'success',
                  'archivado': 'info'
                };
                return (
                  <tr key={papel.id}>
                    <td>{getClienteNombre(papel.clienteId)}</td>
                    <td>{papel.periodo}</td>
                    <td>
                      <span className={`badge badge-${estadoColores[papel.estado]}`}>
                        {papel.estado.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)' }}>
                        {papel.estado === 'aceptado_afip' ? '✓ 100%' : papel.estado === 'completo' ? '70%' : papel.estado === 'en_revision' ? '50%' : '30%'}
                      </div>
                    </td>
                    <td className="text-small text-muted">{papel.notas?.substring(0, 50)}...</td>
                    <td>
                      <Link to={`/iva/detalle/${papel.id}`} className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>
                        Ver
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
