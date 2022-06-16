const $emojiList = document.getElementById("emojiList");

const emojii = [];

for (let i = 127749; i <= 127847; i++) {
  emojii.push(`
   <div id="emoji">

         <div class="emojiCall">&#${i};</div><br>
         <div class="emojiCode">${i}</div>

     </div>
   `);
}
$emojiList.innerHTML += emojii.join("");
