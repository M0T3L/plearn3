import Navbar from '../../../components/Navbar';

export default function AssignmentPage() {
  return (
    <>
      <Navbar studentName="Ahmet Yılmaz" />
      <main className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl mb-3">Ödev: Basit Elektrik Devresi Kurma</h2>
        <iframe
          src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_tr.html"
          width="800"
          height="600"
          allowFullScreen
          className="border"
        ></iframe>
      </main>
    </>
  );
}