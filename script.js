// 중복 검사 개선
const lottoStrings = lottoData.map(set => set.slice().sort((a, b) => a - b).join(","));

function generate(count) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const generated = [];

  while (generated.length < count) {
    const numbers = [];
    while (numbers.length < 6) {
      const n = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(n)) numbers.push(n);
    }
    numbers.sort((a, b) => a - b);

    const numberString = numbers.join(",");
    if (!lottoStrings.includes(numberString)) {
      generated.push(numbers);
    }
  }

  generated.forEach((set, i) => {
    const div = document.createElement("div");
    div.textContent = `${i + 1}조합: ${set.join(", ")}`;
    resultsDiv.appendChild(div);
  });
}
