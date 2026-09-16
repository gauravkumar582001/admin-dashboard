import { Bell, UserCircle } from 'lucide-react'

function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Admin Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} className="text-gray-600" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={32} className="text-gray-600" />

          <div>
            <p className="text-sm font-semibold">
              Admin User
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar