import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Building2,
  CheckSquare,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { currentUser } from '../data/mockData';
import logoHeader from '../../Logo-vexina.png';
import './MainLayout.css';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <BarChart3 size={20} />
  },
  {
    label: 'Clientes',
    path: '/clientes',
    icon: <Users size={20} />
  },
  {
    label: 'Impuestos',
    path: '/impuestos',
    icon: <DollarSign size={20} />,
    submenu: [
      { label: 'Liquidación IVA', path: '/iva', icon: <FileText size={16} /> },
      { label: 'Liquidación Ganancias', path: '/ganancias', icon: <FileText size={16} /> },
      { label: 'IIBB', path: '/iibb', icon: <FileText size={16} /> }
    ]
  },
  {
    label: 'Sueldos',
    path: '/sueldos',
    icon: <DollarSign size={20} />
  },
  {
    label: 'Estructura Societaria',
    path: '/estructura',
    icon: <Building2 size={20} />
  },
  {
    label: 'Balances y Auditoría',
    path: '/balances',
    icon: <FileText size={20} />
  },
  {
    label: 'Portal Clientes',
    path: '/portal-clientes',
    icon: <Users size={20} />
  },
  {
    label: 'Tareas y Vencimientos',
    path: '/tareas',
    icon: <CheckSquare size={20} />
  }
];

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="main-layout">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <Link to="/dashboard" className="sidebar-brand" aria-label="Ir al dashboard">
            <img className="sidebar-brand-logo" src={logoHeader} alt="Vexina Auditaxes" />
          </Link>
          <button
            className="sidebar-toggle-mobile"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
              {item.submenu && (
                <div className="submenu">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`nav-item submenu-item ${isActive(sub.path) ? 'active' : ''}`}
                    >
                      <span className="nav-icon">{sub.icon}</span>
                      <span className="nav-label">{sub.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">{currentUser.avatar}</div>
            <div className="user-details">
              <p className="user-name">{currentUser.name}</p>
              <p className="user-role">{currentUser.role}</p>
            </div>
          </div>
          <button className="btn-logout">
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
