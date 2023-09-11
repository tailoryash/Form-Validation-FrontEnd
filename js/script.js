let employeeList = [];
function save() {
  let empCode = document.getElementById("empCode").value;
  let fullName = document.getElementById("fullName").value;
  let techStack = document.getElementById("tech").value;

  if (empCode == "") {
    document.getElementById("errorMsgForCode").innerHTML =
      "Please enter Code!!";
  } else {
    document.getElementById("errorMsgForCode").innerHTML = "";
    if (fullName == "") {
      document.getElementById("errorMsgForName").innerHTML =
        "Please enter Full Name!!";
    } else if (techStack == "") {
      document.getElementById("errorMsgForName").innerHTML = "";
      document.getElementById("errorMsgForTech").innerHTML =
        "Please enter Tech Stack!!";
    } else {
      document.getElementById("errorMsgForTech").innerHTML = "";
      const employee = {
        code: empCode,
        fullName: fullName,
        tech: techStack,
      };
      employeeList.push(employee);
      //   JSON.stringify(employee);
      console.log("Added: ", employee, employeeList);
      document.getElementById("empForm").reset();
      display();
    }
  }
}

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
