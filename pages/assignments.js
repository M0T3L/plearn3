import Navbar from '../components/Navbar';
import AssignmentList from '../components/AssignmentList';

export default function AssignmentsPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <AssignmentList />
      </main>
    </>
  );
}