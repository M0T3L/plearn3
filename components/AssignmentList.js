import Link from "next/link";

const assignments = [
  {
    id: 1,
    title: "Basit Elektrik Devresi Kurma",
    unit: 7,
  },
  {
    id: 2,
    title: "Direnç Ölçme Deneyi",
    unit: 7,
  },
];

export default function AssignmentList() {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Ödevler</h2>
      <ul>
        {assignments.map((a) => (
          <li key={a.id} className="mb-2">
            <Link href={a.id === 1 ? "/units/7/assignment" : "#"} className={a.id === 1 ? "text-blue-600 underline" : "opacity-50"}>
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}