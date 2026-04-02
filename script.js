
  // 👉 Typing animation
  const texts = ["আমরা কাজ করি আপনার জন্যে", " আমাদের কাজে থাকে নিশ্চয়তা", ];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-text').textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500); // বিরতি
    } else {
      setTimeout(type, 150);
    }
  }
  type();



function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


    
