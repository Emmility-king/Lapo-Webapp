'use client'
const requests = [
  { branch: 'Corporate', type: 'Instant', quantity: 15, status: 'In Progress' },
  { branch: 'Retail', type: 'Personalized', quantity: 10, status: 'Pending' },
  { branch: 'Corporate', type: 'Instant', quantity: 20, status: 'Completed' },
];

export default function RequestTable() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md overflow-x-auto">
      <h3 className="text-lg font-semibold mb-3">Recent Card Requests</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th>Branch</th>
            <th>Card Type</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, idx) => (
            <tr key={idx} className="border-b">
              <td>{req.branch}</td>
              <td>{req.type}</td>
              <td>{req.quantity}</td>
              <td>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${req.status === 'Completed' ? 'bg-green-100 text-green-700' : req.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                  {req.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
