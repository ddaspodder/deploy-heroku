console.log("Inside form.js");

const userName = document.getElementById("user-name");
const form = document.getElementById("user-form");

function validate() {
  const userNameValue = userName.value;
  console.log("Inside validate");
  const reg = /^[a-z A-Z]+$/;
  let errMsg = "";
  let pass = false;
  if (userNameValue === "") errMsg = "This field cannot be empty";
  else {
    pass = reg.test(userNameValue);
    if (!pass) errMsg = "Please enter a valid value";
  }
  document.getElementById("error").innerHTML = `<p>${errMsg}</p>`;
  return pass;
}

form.addEventListener("submit", (event) => {
  if (!validate()) {
    event.preventDefault();
  }
});

userName.addEventListener("blur", () => {
  validate();
});
