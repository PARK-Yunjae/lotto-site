function generateLotto() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return [...numbers].sort((a, b) => a - b);
}

function showLotto() {
  const result = document.getElementById("result");
  const nums = generateLotto();
  result.innerHTML = nums.map(n => `<span class="ball">${n}</span>`).join('');
}