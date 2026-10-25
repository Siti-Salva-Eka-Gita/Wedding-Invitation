function openEnvelope() {
  const cover = document.getElementById("amplop-cover");
  const music = document.getElementById("backsound");

  cover.classList.add("fade-out");

  music.volume = 0.9;
  music.play().catch((error) => {
    console.log("Musik belum bisa diputar:", error);
  });
}

const Dday = new Date("2026-12-20T09:00:00+07:00").getTime();

setInterval(() => {
  const s = Dday - Date.now();
  if (s < 0) return;

  document.getElementById("days").innerText = String(Math.floor(s / 86400000)).padStart(2, '0');
  document.getElementById("hours").innerText = String(Math.floor((s % 86400000) / 3600000)).padStart(2, '0');
  document.getElementById("minutes").innerText = String(Math.floor((s % 3600000) / 60000)).padStart(2, '0');
  document.getElementById("seconds").innerText = String(Math.floor((s % 60000) / 1000)).padStart(2, '0');
}, 1000);

const dust = document.getElementById("gold-dust");

if (dust) {
  dust.innerHTML = Array.from({ length: 45 }, () => {
    const s = Math.random() * 5 + 2;
    const dur = Math.random() * 8 + 8;
    const del = Math.random() * 2;
    return `<div class="gold-particle" style="left:${Math.random()*100}vw; top:${Math.random()*100}vh; width:${s}px; height:${s}px; animation-duration:${dur}s; animation-delay:${del}s;"></div>`;
  }).join('');
}

window.addEventListener("scroll", () => {
  const det = document.querySelector(".details");
  if (det && dust) {
    dust.classList.toggle("aktif", det.getBoundingClientRect().top <= window.innerHeight);
  }
});
