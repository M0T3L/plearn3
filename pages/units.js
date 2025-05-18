import Navbar from '../components/Navbar';
import UnitList from '../components/UnitList';

export default function UnitsPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <UnitList />
      </main>
    </>
  );
}