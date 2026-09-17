import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ShieldCheck,
} from 'lucide-react'

function Sidebar() {
  const navigate = useNavigate()

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Users',
      path: '/users',
      icon: Users,
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: BarChart3,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ]

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-slate-900 text-white shadow-xl">

      <div className="flex h-16 items-center gap-3 border-b border-slate-700 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h1 className="text-lg font-bold">Admin Panel</h1>
          <p className="text-xs text-slate-400">React Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'mb-2 flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white'
                  : 'mb-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white'
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t border-slate-700 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-red-600 hover:text-white"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  )
}

export default Sidebar