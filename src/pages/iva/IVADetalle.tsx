import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { papelesDeTrabajoIVA, clientes } from '../../data/mockData';
import { ArrowLeft, Download, CheckCircle, X, AlertTriangle } from 'lucide-react';

export const IVADetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const papel = papelesDeTrabajoIVA.find(p => p.id === id);
  const cliente = clientes.find(c => c.id === papel?.clienteId);

  if (!papel || !cliente) {
    return <div>Papel no encontrado</div>;
  }

  const estadoColor: { [key: string]: string } = {
    borrador: 'info',
    en_revision: 'warning',
    aprobado: 'success',
    rechazado: 'error'
  };

  return (
    <div>
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate('/iva')}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <div className="card mb-4">
        <div className="flex-between mb-4">
          <div>
            <h1>{cliente.name}</h1>
            <p className="text-muted">{cliente.cuit}</p>
          </div>
          <span className={`badge badge-${estadoColor[papel.estado]}`}>
            {papel.estado}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-muted text-small">Período IVA</p>
            <p style={{ fontWeight: 600 }}>{papel.periodo}</p>
          </div>
          <div>
            <p className="text-muted text-small">Tipo de Impuesto</p>
            <p style={{ fontWeight: 600 }}>{papel.tipo}</p>
          </div>
          <div>
            <p className="text-muted text-small">Creado por</p>
            <p style={{ fontWeight: 600 }}>Usuario #{papel.createdBy} - {papel.createdAt.toLocaleDateString('es-AR')}</p>
          </div>
          {papel.revisionedBy && (
            <div>
              <p className="text-muted text-small">Revisado por</p>
              <p style={{ fontWeight: 600 }}>Usuario #{papel.revisionedBy} - {papel.revisionedAt?.toLocaleDateString('es-AR')}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Comprobantes</h3>
          <p className="text-muted mt-2">Cargar documentación fiscal del período</p>
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--neutral-100)', borderRadius: '0.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--neutral-600)', margin: 0 }}>Compras: 15 | Ventas: 23</p>
          </div>
          <button className="btn btn-secondary mt-3" style={{ width: '100%' }}>
            Cargar Comprobantes
          </button>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Validaciones</h3>
          <p className="text-muted mt-2">Estado de controles automáticos</p>
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--neutral-100)', borderRadius: '0.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--success)', margin: 0 }}>4 de 4 completadas</p>
          </div>
          <button className="btn btn-secondary mt-3" style={{ width: '100%' }}>
            Ver Detalle
          </button>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Resultado</h3>
          <p className="text-muted mt-2">Liquidación calculada</p>
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--neutral-100)', borderRadius: '0.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--success)' }}>$45,320</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--neutral-600)', margin: 0 }}>IVA a Ingresar</p>
          </div>
          <button className="btn btn-secondary mt-3" style={{ width: '100%' }}>
            Ver Cálculos
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <h3>Información del Proceso</h3>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <p className="text-muted text-small">Fase Actual del Flujo</p>
            <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>
              {papel.estado === 'en_revision' && '3️⃣ Revisión Técnica'}
              {papel.estado === 'aceptado_afip' && '9️⃣ Presentación AFIP (Aceptado)'}
              {papel.estado === 'completo' && '2️⃣ Validación por Cliente'}
            </p>
          </div>
          <div>
            <p className="text-muted text-small">Próximo Paso</p>
            <p style={{ fontWeight: 600, marginTop: '0.25rem' }}>
              {papel.estado === 'en_revision' && 'Aprobación del Analista'}
              {papel.estado === 'aceptado_afip' && 'Registración Contable'}
              {papel.estado === 'completo' && 'Confirmación de Cliente'}
            </p>
          </div>
        </div>
      </div>

      {papel.estado === 'completo' && (
        <div className="card mb-4" style={{ background: 'rgba(251, 146, 60, 0.05)', border: '1px solid rgba(251, 146, 60, 0.2)' }}>
          <div className="flex-between" style={{ alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={20} color="var(--warning)" /> Validación Requerida
              </h3>
              <p className="text-muted">Variación detectada: +28% en ventas vs. período anterior</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--neutral-600)', marginTop: '0.5rem' }}>
                Se requiere confirmación del cliente sobre la causa de esta variación antes de proceder con la presentación.
              </p>
            </div>
            <button className="btn btn-secondary">Solicitar Confirmación</button>
          </div>
        </div>
      )}
        <div className="mt-3" style={{ padding: '1rem', background: 'var(--neutral-100)', borderRadius: '0.5rem', minHeight: '100px' }}>
          <p className="text-muted">{papel.notas || '(Sin notas)'}</p>
        </div>
        <textarea
          placeholder="Agregar comentario..."
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--neutral-300)',
            marginTop: '1rem',
            minHeight: '80px',
            fontFamily: 'inherit'
          }}
        />
        <button className="btn btn-primary mt-2">Agregar Comentario</button>
      </div>

      {papel.estado === 'en_revision' && (
        <div className="card" style={{ background: 'rgba(14, 165, 233, 0.05)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
          <h3>Flujo de Aprobación</h3>
          <p className="text-muted mt-2">Este papel está en revisión. Acciones disponibles:</p>
          <div className="flex gap-2 mt-3">
            <button className="btn btn-success">
              <CheckCircle size={16} /> Aprobar
            </button>
            <button className="btn btn-danger">
              <X size={16} /> Rechazar
            </button>
            <button className="btn btn-secondary">
              <Download size={16} /> Descargar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
