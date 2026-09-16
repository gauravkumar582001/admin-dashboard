import { Users as UsersIcon, UserPlus } from 'lucide-react'

function Users() {
  const users = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Amit Kumar',
      email: 'amit@gmail.com',
      role: 'User',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Priya Singh',
      email: 'priya@gmail.com',
      role: 'User',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Neha Gupta',
      email: 'neha@gmail.com',
      role: 'Manager',
      status: 'Active',
    },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Users
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered users
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-5 border-b">
          <div className="flex items-center gap-2">
            <UsersIcon size={22} />
            <h2 className="font-semibold text-lg">
              All Users
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {user.name}
                  </td>

                  <td className="p-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="p-4">
                    {user.role}
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
    </div>
  )
}

export default Users