const submitBtn = document.querySelector(".form-submit-btn");
const textarea = document.querySelector("#textarea");
const resultCtn = document.querySelector(".result-ctn");
const cover = document.querySelector(".cover");
const closeBtn = document.querySelector(".close-btn");
const serialNumcorrt = document.querySelector(".serial-num-correct");
const serialNumwrong = document.querySelector(".serial-num-wrong");
const username = document.querySelector("#name");
const number = document.querySelector("#number");
const date = document.querySelector("#date");

const resultPassCtn = document.querySelector(".result-pass-ctn");
const proceedBtn = document.querySelector(".proceed-btn");
const form = document.querySelector(".form");

// const correctSerial = "ML7RXYJ4CJ";
const correctSerial = ["MGXBBMGX", "MGXCQRKDPF"];
submitBtn.addEventListener("click", () => {
  let typed = textarea.value.toUpperCase().replace(/\s+/g, ""); // Convert to uppercase

  // Flag for successful match
  let isMatchFound = false;

  correctSerial.forEach((serialNumber) => {
    if (typed === serialNumber) {
      cover.style.display = "flex";
      resultCtn.style.display = "none";
      resultPassCtn.style.display = "flex";
      isMatchFound = true;
      return;
    }
  });

  serialNumcorrt.textContent = isMatchFound ? typed : ""; // Empty for no match
  serialNumwrong.textContent = !isMatchFound && typed !== "" ? typed : ""; // Empty for empty field or match

  if (typed === "" || !isMatchFound) {
    cover.style.display = "flex";
    resultCtn.style.display = "flex";
    resultPassCtn.style.display = "none";
  }

  if (username.value == "") {
    cover.style.display = "none";
    resultCtn.style.display = "none";
    resultPassCtn.style.display = "none";
    alert("Name Field is empty!");
  }

  if (number.value == "") {
    cover.style.display = "none";
    resultCtn.style.display = "none";
    resultPassCtn.style.display = "none";
    alert("Phone Number Field is empty!");
  }

  if (date.value == "") {
    cover.style.display = "none";
    resultCtn.style.display = "none";
    resultPassCtn.style.display = "none";
    alert("Date Field is empty!");
  }
});

closeBtn.addEventListener("click", () => {
  cover.style.display = "none";
  resultCtn.style.display = "none";
  resultPassCtn.style.display = "none";
});

proceedBtn.addEventListener("click", () => {
  cover.style.display = "none";
  resultCtn.style.display = "none";
  resultPassCtn.style.display = "none";
  username.value = "";
  number.value = "";
  textarea.value = "";
  date.value = "";
});

form.addEventListener("submit", function (event) {
  // Submit the form programmatically to an iframe
  const iframe = document.querySelector("#hiddenFrame");
  form.target = "hiddenFrame";
  form.action = "/"; // Set the action to the Netlify form handling endpoint or your custom endpoint
  form.method = "POST";
  form.submit();
});
