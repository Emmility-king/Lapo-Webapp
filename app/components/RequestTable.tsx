'use client'

const requests = [
  { branch: 'Corporate', type: 'Instant',      quantity: 15, status: 'In Progress',  view: 'View' },
  { branch: 'Retail',    type: 'Personalized', quantity: 10, status: 'Pending',      view: 'View' },
  { branch: 'Corporate', type: 'Instant',      quantity: 20, status: 'Ready',        view: 'View' },
  { branch: 'Retail',    type: 'Personalized', quantity: 5,  status: 'In Progress',  view: 'View' },
  { branch: 'Corporate', type: 'Instant',      quantity: 12, status: 'Acknowledged', view: 'View' },
];

export default function RequestTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md overflow-x-auto">
      <h3 className="text-lg font-semibold mb-3">Recent Card Requests</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-600 border-b rounded-4xl gap-5 items-center justify-center">
            <th>Branch</th>
            <th>Card Type</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, idx) => (
            <tr key={idx} className="border-red rounded-4xl justify-between items-center mt-3 h-12">
              <td>{req.branch}</td>
              <td>{req.type}</td>
              <td>{req.quantity}</td>
              <td>
                <span className={`text-xs font-semibold px-1 py-1 rounded-2xl mt-3 ${req.status === 'Ready' ? 'bg-green-100 text-green-700' : req.status === 'In Progress' ? 'bg-yellow-100 border-0 text-yellow-700' : 'bg-blue-200 border-1 text-blue-400 '}`}>
                  {req.status}
                </span>
              </td>
              <td>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  {req.view || 'View'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
