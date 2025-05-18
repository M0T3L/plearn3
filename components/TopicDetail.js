import Link from "next/link";

export default function TopicDetail() {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-3">Konu: Basit Elektrik Devreleri</h2>
      <div className="aspect-video mb-4">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/iZYedWOERN0"
          title="YouTube video player" allowFullScreen />
      </div>
      <div className="flex gap-2">
        <button className="bg-gray-200 p-2 rounded opacity-60 cursor-not-allowed">Önceki Konu</button>
        <button className="bg-gray-200 p-2 rounded opacity-60 cursor-not-allowed">Sonraki Konu</button>
        <Link href="/units/7/assignment" className="bg-blue-600 text-white p-2 rounded">Ödeve Git</Link>
      </div>
    </div>
  );
}