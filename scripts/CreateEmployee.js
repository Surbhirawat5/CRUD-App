// npx json-server backend/db.json --watch --port=6600    ---> for running on terminal

const employeeFormEle = document.getElementById("employee-form");
const firstNameEle = document.getElementById("firstname");
const middleNameEle = document.getElementById("middlename");
const lastNameEle = document.getElementById("lastname");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");
const streetEle = document.getElementById("address");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipCodeEle = document.getElementById("zipcode");



employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");


 // CREATE NEW UPDATED EMP OBJECT 

  let newEmployeeData = {
    firstname : firstNameEle.value.trim(),
    middlename : middleNameEle.value.trim(),
    lastname : lastNameEle.value.trim(),
    dob : dobEle.value.trim(),
    email : emailEle.value.trim(),
    maritalStatus : maritalStatusEle.value.trim(),
    phoneNo : phoneNoEle.value.trim(),
    address:{
        street : streetEle.value.trim(),
        city : cityEle.value.trim(),
        state : stateEle.value.trim(),
        country : countryEle.value.trim(),
        zipcode : zipCodeEle.value.trim(),

   },
  };


  try{

  let resp = await fetch("http://localhost:5000/employees",{
    method : "POST",
    headers : {
      "content-Type" : "application/json",
    },
    body: JSON.stringify(newEmployeeData),               // <---- SEND emp data in JSON- format
  });

console.log(resp);

// NAVIGATION
window.location.href = "AllEmployees.html"

  } catch(err){
    // console.log(err);
    alert("Something went wrong❌")
  }

});






