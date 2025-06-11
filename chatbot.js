(function () {
  // Basic UI
  document.body.innerHTML = `
    <div style="font-family:sans-serif; padding:10px; max-width:600px;">
      <h3>Business Central Chatbot</h3>
      <textarea id="chatLog" style="width:100%; height:300px;" readonly></textarea><br/>
      <input id="chatInput" type="text" style="width:80%;" placeholder="Ask me about AL functionality..." />
      <button id="sendBtn" style="width:18%;">Send</button>
    </div>
  `;

  const chatLog = document.getElementById("chatLog");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");

  async function send() {
    const question = chatInput.value.trim();
    if (!question) return;
    chatLog.value += "\nYou: " + question;
    chatInput.value = "";

    try {
      const response = await fetch("https://your-backend-domain.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        chatLog.value += "\nBot: Sorry, I cannot answer right now.";
        return;
      }
      const data = await response.json();
      chatLog.value += "\nBot: " + data.answer;
      chatLog.scrollTop = chatLog.scrollHeight;
    } catch (err) {
      chatLog.value += "\nBot: Error contacting backend.";
    }
  }

  sendBtn.addEventListener("click", send);
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  });
})();
