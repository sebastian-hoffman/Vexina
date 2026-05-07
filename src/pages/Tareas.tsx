import React from 'react';
import { tareas } from '../data/mockData';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const Tareas: React.FC = () => {
  return (
    <div>
      <div className="flex-between mb-4">
        <div>
          <h1>Tareas y Vencimientos</h1>
          <p className="text-muted">Panel de seguimiento de tareas y obligaciones fiscales</p>
        </div>
        <button className="btn btn-primary">+ Nueva Tarea</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Tareas Pendientes</p>
              <h2>{tareas.filter(t => t.estado === 'pendiente').length}</h2>
            </div>
            <Clock size={32} opacity={0.2} />
          </div>
        </div>
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">En Curso</p>
              <h2>{tareas.filter(t => t.estado === 'en_curso').length}</h2>
            </div>
            <AlertCircle size={32} opacity={0.2} />
          </div>
        </div>
        <div className="card">
          <div className="flex-between">
            <div>
              <p className="text-muted text-small">Completadas</p>
              <h2>{tareas.filter(t => t.estado === 'completada').length}</h2>
            </div>
            <CheckCircle size={32} opacity={0.2} />
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Todas las Tareas</h3>
        <div className="mt-3">
          {tareas.map(tarea => (
            <div key={tarea.id} style={{ padding: '1rem', borderBottom: '1px solid var(--neutral-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 600 }}>{tarea.titulo}</p>
                <p className="text-muted text-small" style={{ margin: '0.5rem 0 0 0' }}>{tarea.descripcion}</p>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
                  <span className="text-small text-muted">Vto: {tarea.vencimiento.toLocaleDateString('es-AR')}</span>
                  <span className="text-small text-muted">Asignado a: Usuario #{tarea.asignadoA}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span className={`badge badge-${tarea.prioridad === 'alta' ? 'error' : tarea.prioridad === 'media' ? 'warning' : 'info'}`}>
                  {tarea.prioridad}
                </span>
                <span className={`badge badge-${tarea.estado === 'completada' ? 'success' : tarea.estado === 'en_curso' ? 'warning' : 'info'}`}>
                  {tarea.estado}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
