const myEmojis = ["📚","🎵","👩‍💻", "🎹 ", "🐾"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInputEl = document.getElementById("emoji-input");
const pushBtnEl = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");
const unshiftBtnEl = document.getElementById("unshift-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

pushBtnEl.addEventListener("click", function () {
  if (emojiInputEl.value) {
    myEmojis.push(emojiInputEl.value);
    emojiInputEl.value = "";
    renderEmojis();
  }
});


unshiftBtnEl.addEventListener("click", function () {
    if (emojiInputEl.value) {
      myEmojis.unshift(emojiInputEl.value);
      emojiInputEl.value = "";
      renderEmojis();
    }
  });


popBtn.addEventListener("click", function () {
    myEmojis.pop()
    renderEmojis();
  
});



shiftBtn.addEventListener("click", function () {
    myEmojis.shift()
    renderEmojis();
});
