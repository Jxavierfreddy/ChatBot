(function () {
  document.body.innerHTML = `
    <div style="padding:10px;font-family:sans-serif">
      <h3>Chatbot</h3>
      <input id="chatInput" placeholder="Ask me..." style="width:80%" />
      <button onclick="send()">Send</button>
      <pre id="chatLog"></pre>
    </div>
  `;

  window.send = function () {
    const input = document.getElementById("chatInput").value;
    const log = document.getElementById("chatLog");
    log.textContent += "\nYou: " + input;

    // Example reply (replace with backend call)
    log.textContent += "\nBot: I'm a dummy bot. You said: " + input;
  };
})();
