const buttonDraw = document.querySelector(".button-sortear");
const resultInt = document.querySelector(".result");
const containerResult = document.querySelector("#version-result-desktop");
const resultValues = document.querySelector(".results-values");
const buttonChk = document.querySelector(`input[type="checkbox"]`);
const sectionSorteio = document.querySelector("#sorteio");
const resultSorteio = document.querySelector("#result-sorteio");
const sortearAgain = document.querySelector("#sortear-again");

function reinicio() {
  sortearAgain.classList.add("hidden");
  resultSorteio.classList.add("hidden");
  containerResult.classList.add("hidden");

  sectionSorteio.classList.remove("hidden");
  resultValues.innerHTML = "";

  document.querySelector("#num").value = "";
  document.querySelector("#min").value = "";
  document.querySelector("#max").value = "";

  sectionSorteio.classList.add("animation");
}

sortearAgain.addEventListener("click", reinicio);

buttonDraw.addEventListener("click", () => {
  const numberTotal = Number(document.querySelector("#num").value);
  const numberMin = Number(document.querySelector("#min").value);
  const numberMax = Number(document.querySelector("#max").value);

  if (numberTotal === 0 || numberMax === 0) {
    alert("Digite algum valor nos campos.");
    return;
  } else if (numberMin > numberMax) {
    alert("Valor mínimo não pode ser maior que o máximo.");
    return;
  }

  if (buttonChk.checked) {
    const quantidadeDisponivel = numberMax - numberMin + 1;

    if (numberTotal > quantidadeDisponivel) {
      alert(
        "A quantidade de números solicitada é maior que o intervalo disponível para sorteio sem repetições.",
      );
      return;
    }
  }

  sectionSorteio.classList.add("hidden");
  resultSorteio.classList.remove("hidden");
  containerResult.classList.remove("hidden");

  setTimeout(() => {
    resultValues.innerHTML = "";

    const numbersGenerated = [];

    for (let i = 0; i < numberTotal; i++) {
      setTimeout(() => {
        const creatResult = document.createElement("span");
        creatResult.classList.add("animation-result");

        const creatResultValue = document.createElement("div");
        creatResultValue.classList.add("result-value");

        const creatResultBox = document.createElement("div");
        creatResultBox.classList.add("result-box");

        let result;

        if (buttonChk.checked) {
          do {
            result =
              Math.floor(Math.random() * (numberMax - numberMin + 1)) +
              numberMin;
          } while (numbersGenerated.includes(result));

          numbersGenerated.push(result);
          
        } else {
          result =
            Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
        }

        creatResultValue.textContent = result;

        creatResultBox.append(creatResult, creatResultValue);
        resultValues.append(creatResultBox);

        if (i === numberTotal - 1) {
          setTimeout(() => {
            sortearAgain.classList.remove("hidden");
          }, 3000);
        }
      }, i * 2800);
    }
  }, 1000);
});
