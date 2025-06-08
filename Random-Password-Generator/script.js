function genPassword() {
  const length = parseInt(document.getElementById("lengthSlider").value);
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNum = document.getElementById("numbers").checked;
  const useSym = document.getElementById("symbols").checked;

  let charSet = "";
  if (useLower) charSet += "abcdefghijklmnopqrstuvwxyz";
  if (useUpper) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNum) charSet += "0123456789";
  if (useSym) charSet += "!@#$%^&*()_+{}[]:;<>,.?/~`-=";

  if (charSet.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  const passwordField = document.getElementById("password");
  passwordField.value = password;

  evaluateStrength(password);
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

function evaluateStrength(pass) {
  const strengthText = document.getElementById("strengthText");
  const strengthBar = document.getElementById("strengthBar");
  let score = 0;

  if (/[a-z]/.test(pass)) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^a-zA-Z0-9]/.test(pass)) score++;
  if (pass.length >= 12) score++;

  let strength = "Weak";
  let color = "red";

  if (score >= 4) {
    strength = "Strong";
    color = "limegreen";
  } else if (score >= 3) {
    strength = "Medium";
    color = "orange";
  }

  strengthText.textContent = `Strength: ${strength}`;
  strengthBar.style.backgroundColor = color;
  strengthBar.style.width = `${(score / 5) * 100}%`;
}

document.getElementById("lengthSlider").addEventListener("input", function () {
  document.getElementById("lengthValue").textContent = this.value;
});