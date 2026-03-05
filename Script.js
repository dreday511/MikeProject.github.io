const prompts = [
  "If God is good, why does suffering exist?",
  "How do we know the Bible is reliable?",
  "What makes Christianity different from other religions?",
  "Can faith and science coexist?",
  "Who is Jesus—historically and theologically?",
  "What’s the best way to respond to: 'All religions are basically the same'?"
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("randomPromptBtn");
const out = document.getElementById("promptOut");

btn.addEventListener("click", () => {
  out.textContent = pickRandom(prompts);
});

// Smooth scroll for in-page nav links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", a.getAttribute("href"));
  });
});
