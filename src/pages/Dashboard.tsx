import React from 'react';
import { clientes, tareas, vencimientos } from '../data/mockData';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const clientesActivos = clientes.filter(c => c.estado === 'activo').length;
  const tareasAltas = tareas.filter(t => t.prioridad === 'alta' && t.estado !== 'completada').length;
  const vencimientosPendientes = vencimientos.filter(v => v.estado === 'pendiente').length;

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="text-muted">Bienvenido a la plataforma integral de gestión contable</p>

      <div className="grid grid-cols-3 gap-4 mt-3">
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Clientes Activos</p>
              <h2>{clientesActivos}</h2>
            </div>
            <div style={{ fontSize: '2.5rem', opacity: 0.2 }}>👥</div>
          </div>
        </div>

        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Tareas Prioritarias</p>
              <h2>{tareasAltas}</h2>
            </div>
            <div style={{ fontSize: '2.5rem', opacity: 0.2 }}>⚡</div>
          </div>
        </div>

        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Vencimientos Pendientes</p>
              <h2>{vencimientosPendientes}</h2>
            </div>
            <div style={{ fontSize: '2.5rem', opacity: 0.2 }}>📅</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="card">
          <h3>Vencimientos Próximos</h3>
          <div className="mt-3">
            {vencimientos.slice(0, 5).map(v => (
              <div key={v.id} className="flex-between mb-2" style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: '0.5rem' }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 500 }}>{v.descripcion}</p>
                  <p className="text-muted text-small" style={{ margin: '0.25rem 0 0 0' }}>
                    {v.fecha.toLocaleDateString('es-AR')}
                  </p>
                </div>
                {v.estado === 'vencido' && <AlertCircle size={20} color="var(--error)" />}
                {v.estado === 'completado' && <CheckCircle size={20} color="var(--success)" />}
                {v.estado === 'pendiente' && <Clock size={20} color="var(--warning)" />}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Tareas Asignadas</h3>
          <div className="mt-3">
            {tareas.filter(t => t.estado !== 'completada').slice(0, 5).map(t => (
              <div key={t.id} className="flex-between mb-2" style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: '0.5rem' }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 500 }}>{t.titulo}</p>
                  <p className="text-muted text-small" style={{ margin: '0.25rem 0 0 0' }}>
                    Vto: {t.vencimiento.toLocaleDateString('es-AR')}
                  </p>
                </div>
                <span className={`badge badge-${t.prioridad === 'alta' ? 'error' : t.prioridad === 'media' ? 'warning' : 'info'}`}>
                  {t.prioridad}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
