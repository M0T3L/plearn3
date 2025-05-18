import Navbar from '../components/Navbar';
import Greeting from '../components/Greeting';

const studentName = "Ahmet Yılmaz";
const tasks = [
  { type: "assignment", title: "Basit Elektrik Devresi Kurma" },
  { type: "assignment", title: "Direnç Ölçme Deneyi" },
  { type: "quiz", title: "Basit Elektrik Devreleri Sınavı" },
];

export default function Home() {
  return (
    <>
      <Navbar studentName={studentName} />
      <main className="max-w-2xl mx-auto mt-8">
        <Greeting studentName={studentName} tasks={tasks} />
      </main>
    </>
  );
}