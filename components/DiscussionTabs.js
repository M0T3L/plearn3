import { useState } from "react";

const friendMessages = [
  { name: "Elif", text: "Pil ters bağlanırsa ne olur?" },
  { name: "Mehmet", text: "Dirençlerin toplamı nasıl hesaplanır?" },
  { name: "Zeynep", text: "Ampul neden ışık vermez?" },
];

const aiMessagesInitial = [
  { name: "Sen", text: "@pbot Devre elemanlarını açıklar mısın?" },
  { name: "pbot", text: "Tabii! Devre elemanları güç kaynağı, iletken kablo, anahtar, ampul ve direnç gibi parçalardır." },
];

export default function DiscussionTabs() {
  const [tab, setTab] = useState("friends");
  const [aiMessages, setAiMessages] = useState(aiMessagesInitial);
  const [input, setInput] = useState("");
  const [warn, setWarn] = useState("");

  const handleAIMessage = async () => {
    if (input.includes("@pbot")) {
      if (input.match(/devre elemanlarını açıklar mısın/i)) {
        setAiMessages([...aiMessages, { name: "Sen", text: input }, { name: "pbot", text: "Tabii! Devre elemanları güç kaynağı, iletken kablo, anahtar, ampul ve direnç gibi parçalardır." }]);
      } else {
        setAiMessages([...aiMessages, { name: "Sen", text: input }, { name: "pbot", text: "Sadece ders ile ilgili soru sorabilirsin." }]);
      }
    } else {
      setWarn("Sadece ders ile ilgili soru sorabilirsin.");
    }
    setInput("");
    setTimeout(() => setWarn(""), 2000);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        <button className={`${tab === "friends" ? "font-bold underline" : ""}`} onClick={() => setTab("friends")}>Arkadaşlarınla Tartış</button>
        <button className={`${tab === "ai" ? "font-bold underline" : ""}`} onClick={() => setTab("ai")}>Yapay Zeka ile Tartış</button>
      </div>
      {tab === "friends" ? (
        <div>
          <div className="mb-3">
            {friendMessages.map((m, i) => (
              <div key={i} className="mb-1"><b>{m.name}:</b> {m.text}</div>
            ))}
          </div>
          <input placeholder="Mesajınız..." className="border p-2 rounded w-full mb-2" disabled />
          <div className="text-gray-400 text-sm">Mesaj gönderme pasif (demo)</div>
        </div>
      ) : (
        <div>
          <div className="mb-3">
            {aiMessages.map((m, i) => (
              <div key={i} className={`mb-1 ${m.name === "pbot" ? "text-blue-700" : ""}`}>
                <b>{m.name}:</b> {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Mesajınız..."
              className="border p-2 rounded w-full"
              onKeyDown={e => (e.key === "Enter" && handleAIMessage())}
            />
            <button className="bg-blue-600 text-white rounded px-3" onClick={handleAIMessage}>Gönder</button>
          </div>
          {warn && <div className="text-red-500 mt-2">{warn}</div>}
        </div>
      )}
    </div>
  );
}