import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

var rollV, nameV, genderV, addressV;

const db = getDatabase();

// Reference
// Getting data from Textboxes
var RollBox = document.getElementById("rollBox");
var NameBox = document.getElementById("nameBox");
var GenBox = document.getElementById("genBox");
var AddBox = document.getElementById("addBox");

// Button References

function insertData(event) {
  event.preventDefault();
  readFormData();
  if (rollV == "" && nameV == "" && genderV == "" && addressV == "") {
    alert("Fields can not be blank");
  } else {
    // Code to send the data to Firebase
    set(ref(db, "data/" + rollV), {
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    })
      .then(() => {
        alert("Data Stored Successfully");
      })
      .catch((error) => {
        alert("Unsccussful", error);
      });

    clearFormData();
  }
}
function readData(event) {
  event.preventDefault();
  readFormData();

  // Code to read the data from Firebase

  const dbref = ref(db);

  get(child(dbref, "data/" + rollV))
    .then((snapshot) => {
      if (snapshot.exists()) {
        NameBox.value = snapshot.val().name;
        GenBox.value = snapshot.val().gender;
        AddBox.value = snapshot.val().address;
      } else {
        alert("No Data Found");
      }
    })
    .catch((error) => {
      alert("Unsccussful", error);
    });
}
function updateData(event) {
  event.preventDefault();
  readFormData();
  // Code to update  data in Firebase
  update(ref(db, "data/" + rollV), {
    // rollNo: rollV,  remove as rollno is my Key
    name: nameV,
    gender: genderV,
    address: addressV,
  })
    .then(() => {
      alert("Data Updated Successfully");
    })
    .catch((error) => {
      alert("Unsccussful", error);
    });

  clearFormData();
}
function deleteData(event) {
  event.preventDefault();
  readFormData();
  if (rollV == "" && nameV == "" && genderV == "" && addressV == "") {
    alert("Fields can not be blank");
  } else {
    // Code to remove the data from Firebase
    if (confirm("Are your Sure to Delete this ?")) {
      remove(ref(db, "data/" + rollV))
        .then(() => {
          alert("Data Deleted Successfully");
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
    }

    clearFormData();
  }
}

// Read Data from Form

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

document.querySelectorAll(".btn")[0].onclick = insertData;
document.querySelectorAll(".btn")[1].onclick = readData;
document.querySelectorAll(".btn")[2].onclick = updateData;
document.querySelectorAll(".btn")[3].onclick = deleteData;
