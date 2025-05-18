import Navbar from '../components/Navbar';
import DiscussionTabs from '../components/DiscussionTabs';

export default function DiscussionPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <DiscussionTabs />
      </main>
    </>
  );
}