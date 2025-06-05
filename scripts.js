const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  //console.log(amount.value);
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o evento de submit no (enviar) formulario
form.onsubmit = (event) => {
  event.preventDefault();
  console.log("passei  aqui ....  ");

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;

    default:
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 =  ${formatCurrencyBRL(price)}`;
    let total = amount * price;
    if (isNaN(total)) {
      alert("Não  é uma numero");
    }

    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`;
    footer.classList.add("show-result");
    //------------------------------------
    // console.log(footer);
    // footer.style.display = "block";
    // const description = document.getElementById("description");
    // const result = document.getElementById("result");

    // if (symbol === "US$") {
    //   description.textContent = `${symbol} ${amount} = R$ ${price * amount}`;
    //   result.textContent = ` ${price * amount} Reais`;
    // } else if (symbol === "€") {
    //   description.textContent = `${symbol} ${amount} = R$ ${price * amount}`;
    //   result.textContent = ` ${price * amount} Reais`;
    // } else {
    //   description.textContent = `${symbol} ${amount} = R$ ${price * amount}`;
    //   result.textContent = ` ${price * amount} Reais`;
    // }

    // //US$ 1 = R$ 4,86
    // console.log(description.textContent);
  } catch (error) {
    footer.classList.remove("show-result");
    alert("Não foi possivel converter");
  }

  function formatCurrencyBRL(valeu) {
    return Number(valeu).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
