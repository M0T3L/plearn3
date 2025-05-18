import Navbar from '../../../components/Navbar';
import TopicDetail from '../../../components/TopicDetail';

export default function TopicPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <TopicDetail />
      </main>
    </>
  );
}