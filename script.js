let lottoData = [];

fetch("lotto_all.json")
  .then((res) => res.json())
  .then((data) => {
    lottoData = data.map(d => d.numbers.map(Number));
  });

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

    const isDuplicate = lottoData.some(w => w.every(n => numbers.includes(n)));
    if (!isDuplicate) generated.push(numbers);
  }

  generated.forEach((set, i) => {
    const div = document.createElement("div");
    div.textContent = `${i + 1}조합: ${set.join(", ")}`;
    resultsDiv.appendChild(div);
  });
}
