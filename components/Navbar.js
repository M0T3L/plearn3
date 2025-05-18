import Link from 'next/link';

export default function Navbar({ studentName }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="flex gap-4">
        <Link href="/">Anasayfa</Link>
        <Link href="/units">Konular</Link>
        <Link href="/assignments">Ödevler</Link>
        <Link href="/quiz">Sınavlar</Link>
        <Link href="/discussion">Tartışma</Link>
        <Link href="/notes">Notlar</Link>
      </div>
      <div className="flex items-center gap-3">
        <img src="/avatar.png" alt="avatar" className="w-8 h-8 rounded-full" />
        <span>{studentName}</span>
        <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 ml-2">Çıkış Yap</button>
      </div>
    </nav>
  );
}