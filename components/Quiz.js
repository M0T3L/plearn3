export default function Quiz() {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-3">Quizizz Benzeri Sınav</h2>
      <iframe
        src="https://quizizz.com/join?gc=123456"
        width="800"
        height="600"
        allowFullScreen
        className="border"
        title="Quizizz"
      ></iframe>
    </div>
  );
}