// One deliberate motion moment: the hero's "$ whoami" line types itself out
// on page load, instead of animating everything (which gets busy fast).
// Everything else on the page stays still and readable.

const heroPrompt = document.querySelector('.hero .prompt');
const fullText = heroPrompt.textContent;
heroPrompt.textContent = '';

let i = 0;
function typeChar() {
  if (i < fullText.length) {
    heroPrompt.textContent += fullText.charAt(i);
    i++;
    setTimeout(typeChar, 40); // ms between each character
  }
}

// Wait for the page to finish loading before starting the effect
window.addEventListener('DOMContentLoaded', typeChar);
