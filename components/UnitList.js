import Link from "next/link";

const units = [
  { id: 1, name: "Yer Kabuğu ve Dünya’mızın Hareketleri", active: false },
  { id: 2, name: "Besinlerimiz", active: false },
  { id: 3, name: "Kuvvetin Etkileri", active: false },
  { id: 4, name: "Maddenin Özellikleri", active: false },
  { id: 5, name: "Aydınlatma ve Ses Teknolojileri", active: false },
  { id: 6, name: "İnsan ve Çevre", active: false },
  { id: 7, name: "Basit Elektrik Devreleri", active: true },
];

export default function UnitList() {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Üniteler</h2>
      <ul>
        {units.map((unit) => (
          <li key={unit.id} className={`mb-2 ${unit.active ? "" : "opacity-50"}`}>
            {unit.active ? (
              <Link href={`/units/${unit.id}/1`} className="text-blue-600 underline">
                {unit.id}. {unit.name}
              </Link>
            ) : (
              <span>{unit.id}. {unit.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}