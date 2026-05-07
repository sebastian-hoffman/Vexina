import type { Cliente, Vencimiento, PapelDeTrabajo, Tarea } from '../types';

export const currentUser = {
  id: '1',
  name: 'Juan García',
  email: 'jgarcia@estudios.ar',
  role: 'analista' as const,
  avatar: '👤'
};

export const clientes: Cliente[] = [
  {
    id: 'c1',
    name: 'Importaciones Acme S.A.',
    cuit: '30-12345678-9',
    tipo: 'sociedad',
    email: 'admin@acme.com',
    contacto: 'Carlos López',
    estado: 'activo'
  },
  {
    id: 'c2',
    name: 'Tech Solutions SRL',
    cuit: '30-87654321-5',
    tipo: 'responsable',
    email: 'finance@techsol.com',
    contacto: 'María González',
    estado: 'activo'
  },
  {
    id: 'c3',
    name: 'Juan Pérez (Consultor)',
    cuit: '20-11111111-1',
    tipo: 'monotributista',
    email: 'jp@consultor.com',
    contacto: 'Juan Pérez',
    estado: 'activo'
  },
  {
    id: 'c4',
    name: 'Construcciones Martín e Hijos',
    cuit: '30-99999999-8',
    tipo: 'sociedad',
    email: 'contacto@construymart.com',
    contacto: 'Roberto Martín',
    estado: 'activo'
  }
];

export const vencimientos: Vencimiento[] = [
  {
    id: 'v1',
    clienteId: 'c1',
    tipo: 'IVA',
    fecha: new Date(2026, 4, 20),
    estado: 'pendiente',
    descripcion: 'DDJJ IVA Abril 2026'
  },
  {
    id: 'v2',
    clienteId: 'c2',
    tipo: 'Sueldos',
    fecha: new Date(2026, 4, 15),
    estado: 'en_proceso',
    descripcion: 'Presentación SAC (Abril)'
  },
  {
    id: 'v3',
    clienteId: 'c1',
    tipo: 'Impuesto a las ganancias',
    fecha: new Date(2026, 5, 10),
    estado: 'pendiente',
    descripcion: 'Anticipos Ganancias - Mayo'
  },
  {
    id: 'v4',
    clienteId: 'c3',
    tipo: 'IIBB',
    fecha: new Date(2026, 4, 5),
    estado: 'completado',
    descripcion: 'DDJJ IIBB - Abril'
  },
  {
    id: 'v5',
    clienteId: 'c4',
    tipo: 'IVA',
    fecha: new Date(2026, 4, 8),
    estado: 'vencido',
    descripcion: 'DDJJ IVA - Marzo (ATRASADA)'
  }
];

export const papelesDeTrabajoIVA: PapelDeTrabajo[] = [
  {
    id: 'pt1',
    clienteId: 'c1',
    periodo: '2026-04',
    tipo: 'IVA',
    estado: 'en_revision',
    createdBy: '1',
    createdAt: new Date(2026, 4, 15),
    notas: 'Comprobantes clasificados, aguardando aprobación de responsable. Detectadas variaciones del 8% vs período anterior (dentro de rango aceptable).'
  },
  {
    id: 'pt2',
    clienteId: 'c2',
    periodo: '2026-03',
    tipo: 'IVA',
    estado: 'aceptado_afip',
    createdBy: '1',
    createdAt: new Date(2026, 3, 20),
    revisionedBy: '2',
    revisionedAt: new Date(2026, 4, 2),
    notas: 'DDJJ presentada a AFIP. IVA a ingresar: $45,320. Comprobante de presentación archivado.'
  },
  {
    id: 'pt3',
    clienteId: 'c4',
    periodo: '2026-04',
    tipo: 'IVA',
    estado: 'completo',
    createdBy: '1',
    createdAt: new Date(2026, 4, 10),
    notas: 'Todos los comprobantes cargados. Pendiente validación de cliente por variación anómala: +28% en ventas (revisar causas).'
  }
];

export const tareas: Tarea[] = [
  {
    id: 't1',
    titulo: 'Revisar papeles IVA Acme',
    descripcion: 'Validar clasificación de comprobantes y cálculos',
    clienteId: 'c1',
    asignadoA: '2',
    estado: 'en_curso',
    vencimiento: new Date(2026, 4, 20),
    prioridad: 'alta'
  },
  {
    id: 't2',
    titulo: 'Actualizar legajo cliente',
    descripcion: 'Incorporar documentación de cambio de autoridades',
    clienteId: 'c1',
    asignadoA: '1',
    estado: 'pendiente',
    vencimiento: new Date(2026, 4, 25),
    prioridad: 'media'
  },
  {
    id: 't3',
    titulo: 'Carga comprobantes Construcciones Martín',
    descripcion: 'Ingresar facturas de compras al período Apr-26',
    clienteId: 'c4',
    asignadoA: '1',
    estado: 'pendiente',
    vencimiento: new Date(2026, 4, 22),
    prioridad: 'alta'
  }
];
