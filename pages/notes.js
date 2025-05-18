import Navbar from '../components/Navbar';
import Notes from '../components/Notes';

export default function NotesPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <Notes />
      </main>
    </>
  );
}