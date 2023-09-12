let employeeList = [];
// const errorMsg = document.querySelectorAll("span");
// errorMsg.forEach((error) => {
//   error.addEventListener("onchange", () => {
//     error.value = "";
//   });
// });

// function save() {
//   let empCode = document.getElementById("empCode").value;
//   let fullName = document.getElementById("fullName").value;
//   let techStack = document.getElementById("tech").value;

//   if (empCode == "") {
//     document.getElementById("errorMsgForCode").innerHTML =
//       "Please enter Code!!";
//   } else {
//     document.getElementById("errorMsgForCode").innerHTML = "";
//     if (fullName == "") {
//       document.getElementById("errorMsgForName").innerHTML =
//         "Please enter Full Name!!";
//     } else if (techStack == "") {
//       document.getElementById("errorMsgForName").innerHTML = "";
//       document.getElementById("errorMsgForTech").innerHTML =
//         "Please enter Tech Stack!!";
//     } else {
//       document.getElementById("errorMsgForTech").innerHTML = "";
//       const employee = {
//         code: empCode,
//         fullName: fullName,
//         tech: techStack,
//       };
//       employeeList.push(employee);
//       //   JSON.stringify(employee);
//       console.log("Added: ", employee, employeeList);
//       document.getElementById("empForm").reset();
//       display();
//     }
//   }
// }

function display() {
  const tableData = employeeList
    .map((value) => {
      return `<tr>
                <td>${value.code}</td>
                <td>${value.fullName}</td>
                <td>${value.tech}</td>
              </tr>`;
    })
    .join("");

  const tableBody = document.querySelector("#tableBody");
  tableBody.innerHTML = tableData;
}

function validateName() {
  var name = document.getElementById("fullName").value;

  if (name.trim() == "") {
    document.getElementById("errorMsgForName").innerHTML = "Name is Required";
    return false;
  } else {
    if (!name.match(/^[A-Za-z\s]*$/)) {
      document.getElementById("errorMsgForName").innerHTML = "Write full name";
      return false;
    } else if (name.trim().length > 50) {
      document.getElementById("errorMsgForName").innerHTML =
        "length should be below 50 letters !";
      return false;
    }
  }
  document.getElementById("errorMsgForName").innerHTML = "";
  return true;
}

function validateTech() {
  var tech = document.getElementById("tech").value;
  if (tech.trim() == "") {
    document.getElementById("errorMsgForTech").innerHTML = "tech is required!";
    return false;
  } else {
    if (!tech.match(/^[A-Za-z\s]*$/)) {
      document.getElementById("errorMsgForTech").innerHTML =
        "only letters allowed!";
      return false;
    }
  }
  document.getElementById("errorMsgForTech").innerHTML = "";
  return true;
}

function validateCode() {
  var code = document.getElementById("empCode").value;
  if (code == 0) {
    document.getElementById("errorMsgForCode").innerHTML =
      "Code should be greater than zero or only digits allowed";
    return false;
  } else {
    if (!code.match(/^\d{3,}$/)) {
      document.getElementById("errorMsgForCode").innerHTML =
        "Code's length should be above 3 digits";
      return false;
    }
  }

  document.getElementById("errorMsgForCode").innerHTML = "";
  return true;
}

function save() {
  if (validateCode() && validateName() && validateTech()) {
    let empCode = document.getElementById("empCode").value;
    let fullName = document.getElementById("fullName").value;
    let techStack = document.getElementById("tech").value;

    const employee = {
      code: empCode,
      fullName: fullName,
      tech: techStack,
    };
    employeeList.push(employee);
    console.log("Added: ", employee, employeeList);
    document.getElementById("empForm").reset();
    display();
  } else {
    validateCode();
    validateTech();
    validateName();
  }
}
