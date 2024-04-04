let employees = [];

      const formContainer = document.getElementById("formContainer");
      const form = document.getElementById('form');
      const btn = document.querySelector("button");
      const errorMsg = document.getElementById("error");
      const successMsg = document.getElementById("success");
      const employeeListDiv = document.getElementById("employeeList");
      const zeroEmployees = document.getElementById('total-emp')

      btn.addEventListener("click", function () {
        const name = document.getElementById("fname").value.trim();
        const profession= document
          .querySelector("#profession")
          .value.trim();
        const age = parseInt(document.querySelector("#age").value);

        if (!name || !profession || isNaN(age)) {
          errorMsg.textContent =
            "Error : Please Make sure All the fields are filled before adding in an employee !";
          successMsg.textContent = "";
        } else {
          const newEmployee = {
            id: employees.length + 1,
            name: name,
            profession: profession,
            age: age
          };
          employees.push(newEmployee);
          displayEmployees();
          successMsg.textContent = "Success : Employee Added!";
          errorMsg.textContent = "";
          form.reset();
        }
      });

      function displayEmployees() {
        employeeListDiv.innerHTML = "";
        employees.forEach(function(employee) {
          const employeeDiv = document.createElement("div");
          employeeDiv.innerHTML = `<strong></strong> ${employee.id}. <strong>Name:</strong> ${employee.name}, <strong>Profession:</strong> ${employee.profession}, <strong>Age:</strong> ${employee.age} <button class="deleteBtn" data-id="${employee.id}">Delete User</button>`;
          zeroEmployees.textContent= "";
          employeeListDiv.append(employeeDiv);
        });

        employeeListDiv.addEventListener("click", function (e) {
          if (e.target.classList.contains("deleteBtn")) {
            const id = parseInt(e.target.getAttribute("data-id"));
            employees = employees.filter((employee) => employee.id !== id);
            displayEmployees();
          }
        });
      }