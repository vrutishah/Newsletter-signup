let emailInput = document.getElementById("email");
let validation = document.getElementById("validation");
let subscribe = document.getElementById("subscribe");
let input = document.querySelector("input[type='text']");
let dismiss = document.getElementById("dismiss");
let email = document.getElementById("email").value;
let confirmationMessage = document.querySelector(".confirmation");

dismiss.addEventListener("click", function () {
  document.getElementById("thank-you-message").style.display = "none";
  document.getElementById("container").style.display = "flex";
});

subscribe.addEventListener("click", function () {
  let email = emailInput.value;
  if (validateEmail(email)) {
    document.getElementById("container").style.display = "none";
    document.getElementById("thank-you-message").style.display = "block";
    confirmationMessage.textContent =
      "A confirmation email has been sent to " +
      email +
      ". Please open it and click the button inside to confirm your subscription.";
  } else {
    validation.style.color = "rgb(248, 58, 58)";
    validation.textContent = "Valid email required";
    input.style.color = "rgb(248, 58, 58)";
    input.style.backgroundColor = "rgb(247, 222, 222)";
    input.style.borderColor = "rgb(248, 58, 58)";
  }
});

function validateEmail(email) {
  let parts = email.split("@");
  if (parts.length !== 2) {
    return false;
  }
  let at = email.lastIndexOf("@");
  let fullStop = email.lastIndexOf(".");
  if (at < 0 || fullStop < 0 || fullStop < at) {
    return false;
  }
  let between = email.substring(fullStop + 1, at);
  let dot = email.split(".");
  let hasAt = false;
  let localLength = false;
  let lengthAfterDot = false;
  let betweenLength = false;

  let local = parts[0];

  let afterDot = dot[1]; //it contains at least two character after '.'

  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      hasAt = true;
    }
    if (local.length >= 1) {
      localLength = true;
    }
    if (afterDot.length >= 2) {
      lengthAfterDot = true;
    }
    if (between.length >= 3) {
      betweenLength = true;
    }
  }

  if (hasAt && localLength && lengthAfterDot && betweenLength) {
    return true;
  } else {
    return false;
  }
}