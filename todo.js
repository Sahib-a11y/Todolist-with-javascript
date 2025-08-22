let btn = document.getElementById("submit");
let items = document.getElementById("items");
let filter = document.getElementById("filter");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("item").value;

    if (input.length === 0) {
        console.log("Please fill the form");
    } else {
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        // Create span to hold text
        let span = document.createElement("span");
        span.textContent = input;

        // Delete Button
        let delBtn = document.createElement("button");
        delBtn.className = "btn btn-danger btn-sm ml-2 delete";
        delBtn.textContent = "X";

        // Edit Button
        let editBtn = document.createElement("button");
        editBtn.className = "btn btn-warning btn-sm ml-2 edit";
        editBtn.textContent = "Edit";

        // Button container
        let btnGroup = document.createElement("div");
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(delBtn);

        // Append to li
        li.appendChild(span);
        li.appendChild(btnGroup);

        // Append li to list
        items.appendChild(li);

        document.getElementById("item").value = '';
    }
});

// Delete or Edit
items.addEventListener("click", function (e) {
    let li = e.target.closest("li");

    if (e.target.classList.contains("delete")) {
        li.remove();
    }

    if (e.target.classList.contains("edit")) {
        let span = li.querySelector("span");

        if (e.target.textContent === "Edit") {
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.textContent;
            input.className = "form-control form-control-sm d-inline w-50";

            li.insertBefore(input, span);
            li.removeChild(span);
            e.target.textContent = "Save";
        } else {
            let input = li.querySelector("input");
            let newSpan = document.createElement("span");
            newSpan.textContent = input.value;

            li.insertBefore(newSpan, input);
            li.removeChild(input);
            e.target.textContent = "Edit";
        }
    }
});

// Filter
filter.addEventListener("input", function (e) {
    let searchTerm = e.target.value.toLowerCase();
    let list = document.getElementsByTagName("li");

    Array.from(list).forEach(item => {
        let text = item.querySelector("span")?.textContent.toLowerCase() || "";
        item.style.display = text.includes(searchTerm) ? "block" : "none";
    });
});




//  login form 

// Question:
// You are required to build a two-part web application as described below:
// 1. Login Page Implementation:
// • Create a login page as the first screen of your application.
// • The login credentials (username and password) must be hardcoded in the application (e.g., in the JavaScript file).
// • Only upon successful login should the user be allowed to proceed to the next section of the application.
// 2. Superhero Profile Search using JSON:
// • After logging in, students must create a JSON file that contains multiple superhero objects.
// • Each object in the JSON should include the following properties: o name: The name of the superhero.
// • image: A URL to an image of the superhero.
// • description: A brief description of the superhero. o tagline: A short tagline or catchphrase.