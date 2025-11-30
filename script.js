async function sendMsg() {
  const message = document.getElementById("msg").value;

  const res = await fetch("https://example-app-1kbf.onrender.com/api/message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.reply;
}
