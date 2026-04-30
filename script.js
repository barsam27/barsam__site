const qa = {
  سلام: "سلام خوش اومدی امیدوارم تجربه خوبی از سایت داشته باشی",
  چطوری: "خوبم رفیق! تو چطوری؟",
  "سلام خوبی": "سلام رفیق ممنون، تو خوبی؟",
  "چه خبر": "سلامتی تو",
  احوالت: "خوبم مرسی",
  "صبح بخیر": "صبح پر انرژی",
  "شب بخیر": "شب آروم",
  "سایت معتبره": "صد در صد معتبره، کاربران زیادی راضی بودن",
  "قیمت‌ها خوبه": "کاملا منصفانه و اقتصادی",
  "محصولاتت چیه": "بازی، چت بات، ماشین حساب، ابزارهای پایتون و...",
  "چطور خرید کنم":
    "روی دکمه خرید کلیک کن و با شماره کارت پشتیبانی خرید انجام میدی",
  "پشتیبانی دارید": "بله تلگرام و اینستاگرام ۲۴ ساعته",
  ممنون: "خواهش می‌کنم!",
  "خفه شو": "باشه هر وقت خواستی حرف بزن",
  رفیقمی: "صد درصد رفیق",
  default: "مرسی از پیامت! هر سوالی داری درباره محصولات یا خرید بپرس.",
};
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

function addMessage(text, isUser) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `msg ${isUser ? "user-msg" : "bot-msg"}`;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMsg) {
  let reply = qa[userMsg] || qa["default"];
  for (let key in qa) {
    if (userMsg.includes(key) && key !== "default") {
      reply = qa[key];
      break;
    }
  }
  if (userMsg.includes("قیمت") || userMsg.includes("تومان"))
    reply = "قیمت محصولات روی کارت‌ها نوشته شده، از ۲۰ تا ۳۰۰ هزار تومان.";
  if (userMsg.includes("خرید"))
    reply =
      "برای خرید روی دکمه محصول کلیک کن و از راه ارتباطی با ما پرداخت انجام بده.";
  addMessage(reply, false);
}

chatSend.addEventListener("click", () => {
  const txt = chatInput.value.trim();
  if (!txt) return;
  addMessage(txt, true);
  chatInput.value = "";
  setTimeout(() => botReply(txt), 200);
});
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") chatSend.click();
});
addMessage("سلام! من چت بات فروشگاه هستم. سوالی داری؟ بپرس.", false);

// تم دارک/لایت مود
const body = document.body;
const toggleBtn = document.getElementById("darkModeToggle");
const toggleSpan = document.getElementById("toggleText");
function setTheme(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    toggleSpan.innerText = "حالت روشن";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleSpan.innerText = "حالت تاریک";
    localStorage.setItem("theme", "light");
  }
}
const savedTheme = localStorage.getItem("theme");
savedTheme === "dark" ? setTheme(true) : setTheme(false);
toggleBtn.addEventListener("click", () =>
  setTheme(!body.classList.contains("dark-mode"))
);
