let employeeList = [];
function save() {
  let empCode = document.getElementById("empCode").value;
  let fullName = document.getElementById("fullName").value;
  let techStack = document.getElementById("tech").value;

  const employee = {
    code: empCode,
    fullName: fullName,
    tech: techStack,
  };
  employeeList.push(employee);
  //   JSON.stringify(employee);
  console.log("Added: ", employee, employeeList);
}
