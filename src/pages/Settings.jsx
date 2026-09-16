import { useState } from 'react'

function Settings() {
  const [name, setName] = useState('Admin User')
  const [email, setEmail] = useState('admin@gmail.com')

  const handleSave = (e) => {
    e.preventDefault()

    alert('Settings saved successfully!')
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Settings
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Manage your account settings
      </p>

      <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-6">
          Profile Settings
        </h2>

        <form onSubmit={handleSave}>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default Settings