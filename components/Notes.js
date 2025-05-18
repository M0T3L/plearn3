export default function Notes() {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-3">Notlar</h2>
      <textarea
        className="w-full h-32 border p-2 rounded"
        placeholder="Dersle ilgili notlarınızı buraya yazabilirsiniz (demo, kaydedilmez)..."
      ></textarea>
    </div>
  );
}