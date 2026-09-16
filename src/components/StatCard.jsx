function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            {value}
          </h2>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon
            size={24}
            className="text-blue-600"
          />
        </div>
      </div>
    </div>
  )
}

export default StatCard