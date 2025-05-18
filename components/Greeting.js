export default function Greeting({ studentName, tasks }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Hoşgeldin {studentName}!</h1>
      {tasks.length > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-2">
          <strong>Yapılması gerekenler:</strong>
          <ul className="list-disc ml-6">
            {tasks.map((task, idx) => (
              <li key={idx}>
                {task.type === 'assignment' ? 'Ödev' : 'Sınav'}: <b>{task.title}</b>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}