const button = document.getElementById("sub--btn");
const deleteButton = document.getElementById("delete-btn");
const content = document.getElementById("content");

button.addEventListener("click", function () {
  const input = document.getElementById("in--field").value;

  // Validation of the input field

  if (input == "") {
    alert("Please enter some Todo's");
  } else {
    const textNode = document.createTextNode(input);

    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "para-id")
    paragraph.style.textAlign = "center";

    const checkbox = document.createElement("input"); 
    checkbox.setAttribute("id","checkbox-id")
    checkbox.type = "checkbox";

    // Adding line through to the text if checkbox is clicked

    checkbox.addEventListener("click", function () {
      const checkboxes = content.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkboxes.forEach(function (checkbox) {
        const paragraph = checkbox.parentNode;
        if (checkbox.checked) {
          paragraph.style.textDecoration = "line-through";
        } else {
          paragraph.style.textDecoration = "none";
        }

        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            paragraph.style.textDecoration = "line-through";
          } else {
            paragraph.style.textDecoration = "none";
          }
        });
      });
    });

    paragraph.appendChild(checkbox);
    paragraph.appendChild(textNode);
    content.appendChild(paragraph);
  }


  document.getElementById("in--field").value = ""; // Clear input field


// Enable edit button
const editBtn = document.getElementById("edit-btn");
editBtn.disabled = false;
editBtn.addEventListener("click", function () {
  const checkboxes = content.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    const paragraph = checkbox.parentNode;
    const input = paragraph.textContent.trim();
    const editedInput = prompt("Enter the edited todo:", input);
    if (editedInput !== null && editedInput.trim() !== "") {
      // Remove existing text content
      while (paragraph.firstChild) {
        paragraph.removeChild(paragraph.firstChild);
      }

      // Create new text node and checkbox
      const textNode = document.createTextNode(editedInput);
      const newCheckbox = document.createElement("input");
      newCheckbox.setAttribute("type", "checkbox");

      // Add line-through style if the checkbox is checked
      if (checkbox.checked) {
        paragraph.style.textDecoration = "line-through";
        newCheckbox.checked = true;
      }

      // Append checkbox and text node to paragraph
      paragraph.appendChild(newCheckbox);
      paragraph.appendChild(textNode);
    }

    checkbox.checked = false;
    paragraph.style.textDecoration = "none";
  });
});





});

// Delete button

deleteButton.addEventListener("click", function () {
  const checkboxes = content.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    const paragraph = checkbox.parentNode;

    setTimeout(function () {
      content.removeChild(paragraph);
    }, 1000);
  });
});


// Dark Mode 

const btnText = document.querySelector('.change');

function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark');
  
  if (isDarkMode) {
    btnText.textContent = 'ON';
    btnText.classList.add("green");
    btnText.style.fontWeight = 900;
  } else {
    btnText.textContent = 'OFF';
    btnText.classList.remove("green");
   
  }
}

btnText.addEventListener('click', toggleDarkMode);


