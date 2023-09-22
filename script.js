function handleGetFormData() {
  const name = document.getElementById("nama").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;

  const statusCheckbox = document.getElementById("status");
  const status = statusCheckbox.checked;

  const formData = {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };

  return formData;
}

function isNumber(inputString) {
  return !isNaN(inputString);
}

const zipCode = "12345";
const isZipCodeNumber = isNumber(zipCode);
console.log(isZipCodeNumber);

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");

  return statusCheckbox.checked;
}

const isChecked = checkboxIsChecked();
console.log(isChecked);

function validateFormData(formData) {
  return (
    formData !== null && isNumber(formData.zipCode) && formData.status === true
  );
}

const formData = {
  name: "John Doe",
  city: "New York",
  email: "john@example.com",
  zipCode: "12345",
  status: true,
};

const isValid = validateFormData(formData);
console.log(isValid);

function isNumber(inputString) {
  return !isNaN(inputString);
}

function validateFormData(formData) {
  return (
    formData !== null && isNumber(formData.zipCode) && formData.status === true
  );
}

function submit(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("nama").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zipCode").value,
    status: document.getElementById("status").checked,
  };

  const warningDiv = document.getElementById("warning");

  if (validateFormData(formData)) {
    warningDiv.textContent = "";
  } else {
    warningDiv.textContent = "Periksa form Anda sekali lagi.";
  }
}

const form = document.getElementById("myForm");
form.addEventListener("submit", submit);
