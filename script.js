const submitBtn = document.querySelector(".form-submit-btn");
const textarea = document.querySelector("#textarea");
const resultCtn = document.querySelector(".result-ctn");
const cover = document.querySelector(".cover");
const closeBtn = document.querySelector(".close-btn");
const serialNum = document.querySelector(".serial-num");
const username = document.querySelector("#name");
const number = document.querySelector("#number");
const date = document.querySelector("#date");

const resultPassCtn = document.querySelector(".result-pass-ctn");
const proceedBtn = document.querySelector(".proceed-btn");
const form = document.querySelector(".form");

const correctSerial = "MGXCQRKDPF";
submitBtn.addEventListener("click", () => {
  let typed = textarea.value;

  if (typed.toUpperCase() === correctSerial) {
    cover.style.display = "flex";
    resultCtn.style.display = "none";
    resultPassCtn.style.display = "flex";
    sendData();
  } else {
    cover.style.display = "flex";
    resultCtn.style.display = "flex";
    resultPassCtn.style.display = "none";
    serialNum.textContent = textarea.value;
  }
  if (typed === "") {
    cover.style.display = "none";
    resultCtn.style.display = "none";
    resultPassCtn.style.display = "none";
    alert("Serial Number Field is empty!");
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
