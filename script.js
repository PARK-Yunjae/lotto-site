let allWinningNumbers = [];

fetch("lotto_all.json")
  .then(res => res.json())
  .then(data => {
    allWinningNumbers = data.flat();  // 회차별 1등 번호를 1차원 배열로 변환
    console.log("🎯 1등 번호 불러오기 완료");
  });

function generateLottoWithoutOverlap() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!allWinningNumbers.includes(num)) {
      numbers.add(num);
    }
  }
  return [...numbers].sort((a, b) => a - b);
}

function generateAndShow() {
  const nums = generateLottoWithoutOverlap();
  const html = nums.map(n => `<span class="ball">${n}</span>`).join('');
  document.getElementById("result").innerHTML = html;
}