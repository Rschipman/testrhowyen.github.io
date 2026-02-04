/* ---------- Ambient Audio ---------- */
const audio = document.getElementById("forest-audio");
const audioBtn = document.getElementById("audio-toggle");

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.3;
    audio.play();
    audioBtn.textContent = "🌲 ambience: on";
  } else {
    audio.pause();
    audioBtn.textContent = "🌲 ambience: off";
  }
});

/* ---------- Theme Toggle ---------- */
const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

themeBtn.addEventListener("click", () => {
  const isNight = html.dataset.theme === "night";
  html.dataset.theme = isNight ? "day" : "night";
  themeBtn.textContent = isNight ? "🌞 day mode" : "🌙 night mode";
});

/* ---------- Collapsible About ---------- */
document.querySelectorAll(".collapse-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

/* ---------- Twitch Live Detection ---------- */
/* REPLACE WITH YOUR TWITCH USERNAME */
fetch("https://decapi.me/twitch/uptime/YOUR_TWITCH_NAME")
  .then(res => res.text())
  .then(text => {
    const status = document.querySelector(".status");
    const banner = document.getElementById("offline-banner");

    if (!text.toLowerCase().includes("offline")) {
      status.dataset.live = "true";
      status.textContent = "🔴 Live on Twitch";
      banner.style.display = "none";
    }
  })
  .catch(() => {
    console.warn("Twitch status check failed");
  });

/* ---------- Sparkle Trail (Desktop Only) ---------- */
document.addEventListener("mousemove", e => {
  if (window.innerWidth < 768) return;

  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = "✨";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.opacity = "0";
    sparkle.style.transform = "translateY(-10px)";
  });

  setTimeout(() => sparkle.remove(), 800);
});
/* ---------- End of Script ---------- */