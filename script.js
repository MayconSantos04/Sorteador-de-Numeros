const buttonDraw = document.querySelector(".button-sortear");
const resultInt = document.querySelector(".result");
const resultValues = document.querySelector(".results-values");
const spanResult = document.querySelector("#span-value");
const resultValue = document.querySelector(".result-value");

buttonDraw.addEventListener("click", () => {
  const numberTotal = Number(document.querySelector("#num").value);
  const numberMin = Number(document.querySelector("#min").value);
  const numberMax = Number(document.querySelector("#max").value);

  resultValues.innerHTML = "";

  for (let i = 0; i < numberTotal; i++) {
    setTimeout(() => {
      const creatResult = document.createElement("span");
      creatResult.classList.add("animation-result");

      const creatResultValue = document.createElement("div");
      creatResultValue.classList.add("result-value");

      const result =
        Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
      creatResultValue.textContent = result;

      creatResult.append(creatResultValue);
      resultValues.append(creatResult);
    }, i * 5000);
  }
});
