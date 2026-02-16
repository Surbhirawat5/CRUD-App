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



const params = new URLSearchParams(window.location.search);
   const id = params.get("id");

async function getEditEmployee(){
   try {
    let resp = await fetch(`http://localhost:5000/employees/${id}`);
    let data = await resp.json();
    console.log(data);

    // Pre-Fill Input Fields
    firstNameEle.value = data.firstname;
    middleNameEle.value = data.middlename;
    lastNameEle.value = data.lastname;
    dobEle.value = data.dob;
    emailEle.value = data.email;
    maritalStatusEle.value = data.maritalStatus;
    phoneNoEle.value = data.phoneNo;
    streetEle.value = data.address.street;
    stateEle.value = data.address.state;
    countryEle.value = data.address.country;
    zipCodeEle.value = data.address.zipcode;
    cityEle.value = data.address.city;

    
   } catch (error){
    console.log(error);
    alert("Something went wrong ❌")
   }
   
}

window.addEventListener("DOMContentLoaded", () => {
    getEditEmployee();
});



employeeFormEle.addEventListener("submit", async (e) => {
    e.preventDefault();


    // CREATE NEW UPDATED EMP OBJECT 

  let updatedEmployeeData = {
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
    let resp = await fetch(`http://localhost:5000/employees/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",   
        },
        body: JSON.stringify(updatedEmployeeData),
    });
    console.log(resp); 
  } catch (err) {
    console.log(err);
  }
});


 