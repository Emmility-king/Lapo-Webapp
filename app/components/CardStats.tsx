
export default function CardStats() {
  const stats = [
    { title: 'Total Active Cards', value: '26,478' },
    { title: 'Total Personalized Cards', value: '15,703' },
    { title: `Today's Revenue`, value: '₦9.3M' },
    { title: 'Pending Requests', value: '38' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl shadow-md">
          <p className="text-gray-500 text-sm">{stat.title}</p>
          <h2 className="text-xl font-bold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
