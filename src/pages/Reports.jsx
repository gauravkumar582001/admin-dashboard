import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react'

function Reports() {
  const reports = [
    {
      title: 'Total Users',
      value: '1,250',
      icon: Users,
    },
    {
      title: 'Revenue',
      value: '₹85,000',
      icon: DollarSign,
    },
    {
      title: 'Growth',
      value: '+18%',
      icon: TrendingUp,
    },
    {
      title: 'Reports',
      value: '124',
      icon: BarChart3,
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Reports
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        View your business reports
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reports.map((report) => {
          const Icon = report.icon

          return (
            <div
              key={report.title}
              className="bg-white rounded-xl shadow p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">
                    {report.title}
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {report.value}
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
        })}
      </div>

      <div className="bg-white rounded-xl shadow mt-6 p-6">
        <h2 className="text-xl font-bold mb-5">
          Monthly Report
        </h2>

        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">
            Report chart will appear here
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reports