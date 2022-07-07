// Reference
// Getting data from Textboxes
var RollBox = document.getElementById("rollBox");
var NameBox = document.getElementById("nameBox");
var GenBox = document.getElementById("genBox");
var AddBox = document.getElementById("addBox");

// Button References

document.querySelectorAll(".btn")[0].onclick = insertData;
document.querySelectorAll(".btn")[1].onclick = readData;
document.querySelectorAll(".btn")[2].onclick = updateData;
document.querySelectorAll(".btn")[3].onclick = deleteData;

function insertData(event) {
  event.preventDefault();
  readFormData();
  clearFormData();
}
function readData(event) {
  event.preventDefault();
  readFormData();
  clearFormData();
}
function updateData(event) {
  event.preventDefault();
  readFormData();
  clearFormData();
}
function deleteData(event) {
  event.preventDefault();
  readFormData();
  clearFormData();
}

// Read Data from Form
var rollV, nameV, genderV, addressV;

function readFormData() {
  rollV = RollBox.value;
  nameV = NameBox.value;
  genderV = GenBox.value;
  addressV = AddBox.value;
  console.log(rollV, nameV, genderV, addressV);
}

// Clear Form after data Submission

function clearFormData() {
  RollBox.value = "";
  NameBox.value = "";
  GenBox.value = "";
  AddBox.value = "";
}


