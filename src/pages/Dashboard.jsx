import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from 'lucide-react'

import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'

function Dashboard() {
  const recentUsers = [
    {
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      status: 'Active',
    },
    {
      name: 'Amit Kumar',
      email: 'amit@gmail.com',
      status: 'Active',
    },
    {
      name: 'Priya Singh',
      email: 'priya@gmail.com',
      status: 'Inactive',
    },
    {
      name: 'Neha Gupta',
      email: 'neha@gmail.com',
      status: 'Active',
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back, Admin!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              title="Total Users"
              value="1,250"
              icon={Users}
            />

            <StatCard
              title="Revenue"
              value="₹85,000"
              icon={DollarSign}
            />

            <StatCard
              title="Orders"
              value="320"
              icon={ShoppingCart}
            />

            <StatCard
              title="Growth"
              value="+18%"
              icon={TrendingUp}
            />
          </div>

          <div className="bg-white rounded-xl shadow mt-6">
            <div className="p-5 border-b">
              <h2 className="text-xl font-semibold">
                Recent Users
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">
                      Name
                    </th>

                    <th className="text-left p-4">
                      Email
                    </th>

                    <th className="text-left p-4">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentUsers.map((user, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-4 font-medium">
                        {user.name}
                      </td>

                      <td className="p-4 text-gray-600">
                        {user.email}
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            user.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard