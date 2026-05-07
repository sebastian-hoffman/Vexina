// Tipos base de dominio contable

export type UserRole = 'admin' | 'analista' | 'liquidador' | 'cliente';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Cliente {
  id: string;
  name: string;
  cuit: string;
  tipo: 'monotributista' | 'responsable' | 'sociedad';
  email: string;
  contacto: string;
  estado: 'activo' | 'inactivo';
}

export interface Vencimiento {
  id: string;
  clienteId: string;
  tipo: 'IVA' | 'IIBB' | 'Impuesto a las ganancias' | 'Sueldos' | 'ART' | 'Otros';
  fecha: Date;
  estado: 'pendiente' | 'en_proceso' | 'completado' | 'vencido';
  descripcion: string;
}

export interface PapelDeTrabajo {
  id: string;
  clienteId: string;
  periodo: string;
  tipo: 'IVA' | 'Ganancias' | 'IIBB' | 'Sueldos';
  estado: 'borrador' | 'completo' | 'validado_cliente' | 'en_revision' | 'ajuste_requerido' | 'aprobado_tecnico' | 'listo_presentacion' | 'presentado' | 'aceptado_afip' | 'procesado_contable' | 'archivado';
  createdBy: string;
  createdAt: Date;
  revisionedBy?: string;
  revisionedAt?: Date;
  notas?: string;
}

export interface ComprobanteFiscal {
  id: string;
  clienteId: string;
  numero: string;
  tipo: 'factura' | 'nota_credito' | 'nota_debito';
  monto: number;
  iva: number;
  fecha: Date;
  proveedor?: string;
  clasificacion?: 'compra' | 'venta';
}

export interface ValidacionIVA {
  id: string;
  paperTrabajoId: string;
  tipo: 'duplicado' | 'formato' | 'rango_fechas' | 'variacion_anómala' | 'consistencia' | 'tasa_invalida';
  resultado: 'aprobado' | 'rechazado' | 'revisar';
  motivo?: string;
  accionCorrectiva?: string;
  fechaResolucion?: Date;
}

export interface Ajuste {
  id: string;
  paperTrabajoId: string;
  tipo: 'nota_credito' | 'diferencia_cambio' | 'depreciacion' | 'inventario' | 'control_afip' | 'error_anterior';
  periodo: string;
  concepto: string;
  montoBase: number;
  montoIVA: number;
  justificacion: string;
  autorizadoPor: string;
}

export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  clienteId: string;
  asignadoA: string;
  estado: 'pendiente' | 'en_curso' | 'completada';
  vencimiento: Date;
  prioridad: 'baja' | 'media' | 'alta';
}
