import Navbar from '../components/Navbar';
import Quiz from '../components/Quiz';

export default function QuizPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <Quiz />
      </main>
    </>
  );
}