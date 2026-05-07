import React from 'react';
import { CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface Fase {
  numero: number;
  nombre: string;
  descripcion: string;
  estado: 'completado' | 'en_curso' | 'pendiente' | 'alerta';
  responsable: string;
  documentacion: string[];
  validaciones: string[];
}

const fases: Fase[] = [
  {
    numero: 1,
    nombre: 'Recopilación',
    descripcion: 'Recepción y carga de documentación',
    estado: 'completado',
    responsable: 'Cliente / Operario',
    documentacion: ['Comprobantes de compra', 'Comprobantes de venta', 'Recibos servicios'],
    validaciones: ['Integridad documental', 'Formato correcto', 'Fechas período']
  },
  {
    numero: 2,
    nombre: 'Disponibilidad',
    descripcion: 'Cliente confirma recepción + razonabilidad',
    estado: 'completado',
    responsable: 'Cliente',
    documentacion: ['Confirmación de entrega', 'Documentación requerida'],
    validaciones: ['Variación ±30% vs período anterior', 'Coherencia Compras-Ventas', 'Crédito fiscal % sobre ventas']
  },
  {
    numero: 3,
    nombre: 'Revisión Técnica',
    descripcion: 'Analista valida aplicación de normas',
    estado: 'en_curso',
    responsable: 'Analista de Impuestos',
    documentacion: ['Retenciones sufridas', 'Percepciones', 'Ajustes especiales'],
    validaciones: ['Verificación de tasas', 'Control de retenciones/percepciones', 'Saldos anteriores']
  },
  {
    numero: 4,
    nombre: 'Cálculo',
    descripcion: 'Liquidación de IVA con proyecciones',
    estado: 'pendiente',
    responsable: 'Sistema',
    documentacion: ['IVA Compras', 'IVA Ventas', 'Ajustes'],
    validaciones: ['Cálculo neto', 'Retenciones', 'Percepciones', 'Saldo anterior']
  },
  {
    numero: 5,
    nombre: 'Aprobación Cliente',
    descripcion: 'Presentación de borrador y feedback',
    estado: 'pendiente',
    responsable: 'Cliente / Analista',
    documentacion: ['Documento ejecutivo', 'Detalle analítico'],
    validaciones: ['Control de cambios (>5% re-validar)']
  },
  {
    numero: 6,
    nombre: 'Preparación DDJJ',
    descripcion: 'Validaciones pre-presentación',
    estado: 'pendiente',
    responsable: 'Analista',
    documentacion: ['Estructura XML', 'SICORE', 'Créditos verificados'],
    validaciones: ['Formato AFIP', 'Consistencia datos', 'Sincronización SICORE']
  },
  {
    numero: 7,
    nombre: 'Presentación AFIP',
    descripcion: 'Envío DDJJ y comprobante',
    estado: 'pendiente',
    responsable: 'Sistema / AFIP',
    documentacion: ['DDJJ electrónica', 'Comprobante presentación'],
    validaciones: ['Recepción AFIP', 'Tiempos legales']
  },
  {
    numero: 8,
    nombre: 'Acción Post',
    descripcion: 'Gestión deuda/crédito y monitoreo',
    estado: 'pendiente',
    responsable: 'Analista',
    documentacion: ['Plan de pago (si deuda)', 'Solicitud devolución (si crédito)'],
    validaciones: ['Observaciones AFIP', 'Reclamos']
  },
  {
    numero: 9,
    nombre: 'Salida Contable',
    descripcion: 'Registración e integración',
    estado: 'pendiente',
    responsable: 'Contador',
    documentacion: ['Asientos de IVA', 'Proyección tesorería'],
    validaciones: ['Reconciliación', 'Impacto resultado']
  }
];

const getColorEstado = (estado: string) => {
  switch (estado) {
    case 'completado':
      return { bg: 'rgba(16, 185, 129, 0.1)', border: '#10b981', icon: 'success' };
    case 'en_curso':
      return { bg: 'rgba(245, 158, 11, 0.1)', border: '#f59e0b', icon: 'warning' };
    case 'alerta':
      return { bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444', icon: 'error' };
    default:
      return { bg: 'rgba(209, 213, 219, 0.1)', border: '#d1d5db', icon: 'info' };
  }
};

export const IVAFlujo: React.FC = () => {
  return (
    <div>
      <h1>Flujo de Liquidación de IVA</h1>
      <p className="text-muted mb-4">9 fases estructuradas del proceso completo</p>

      {/* Vista Línea de Tiempo */}
      <div className="card mb-4">
        <h3>Línea de Tiempo del Proceso</h3>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          {fases.map((fase, idx) => {
            const color = getColorEstado(fase.estado);
            const Icon = fase.estado === 'completado' ? CheckCircle : fase.estado === 'en_curso' ? Clock : AlertCircle;
            return (
              <div key={fase.numero} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    background: color.bg,
                    border: `2px solid ${color.border}`,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative'
                  }}
                >
                  <Icon size={24} color={color.border} />
                  <span style={{ position: 'absolute', top: '-8px', right: '-8px', fontSize: '0.75rem', fontWeight: 600, background: color.bg, borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {fase.numero}
                  </span>
                </div>
                {idx < fases.length - 1 && (
                  <div style={{ color: '#d1d5db' }}>
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detalle de Cada Fase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem' }}>
        {fases.map((fase) => {
          const color = getColorEstado(fase.estado);
          return (
            <div
              key={fase.numero}
              style={{
                background: color.bg,
                border: `2px solid ${color.border}`,
                borderRadius: '0.75rem',
                padding: '1.5rem'
              }}
            >
              <div className="flex-between mb-2">
                <div>
                  <h3 style={{ margin: 0, color: color.border }}>
                    Fase {fase.numero}: {fase.nombre}
                  </h3>
                  <p className="text-muted text-small" style={{ margin: '0.5rem 0 0 0' }}>
                    {fase.descripcion}
                  </p>
                </div>
                <span className={`badge badge-${fase.estado === 'completado' ? 'success' : fase.estado === 'en_curso' ? 'warning' : 'info'}`}>
                  {fase.estado}
                </span>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${color.border}` }}>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
                  Responsable: <span style={{ color: color.border }}>{fase.responsable}</span>
                </p>

                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>Documentación:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                    {fase.documentacion.map((doc, idx) => (
                      <li key={idx} style={{ color: 'var(--neutral-600)' }}>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>Validaciones:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                    {fase.validaciones.map((val, idx) => (
                      <li key={idx} style={{ color: 'var(--neutral-600)' }}>
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leyenda de Riesgos */}
      <div className="card mt-4">
        <h3>Puntos Críticos de Riesgo</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div>
            <h4 style={{ color: 'var(--error)', marginBottom: '0.5rem' }}>🔴 Alto Riesgo</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--neutral-600)' }}>
              <li>Documentación incompleta o intempestiva</li>
              <li>Variaciones anómalas sin justificación</li>
              <li>Errores en tasas diferenciales</li>
              <li>Omisión de retenciones/percepciones</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>🟡 Riesgo Medio</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--neutral-600)' }}>
              <li>Cambios de categoría sin actualización</li>
              <li>Depósitos en garantía no contabilizados</li>
              <li>Exportaciones sin documentación aduanera</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
