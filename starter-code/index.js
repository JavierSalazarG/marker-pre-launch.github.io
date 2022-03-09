const email = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresion = {
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
};

const validar = (e) => {
  switch (e.target.name) {
    case "email":
      if (expresion.email.test(e.target.value)) {
        document.getElementById("email").classList.remove("false");
        document.getElementById("email").classList.add("true");
      } else {
        document.getElementById("email").classList.add("false");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validar);
  input.addEventListener("blur", validar);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
