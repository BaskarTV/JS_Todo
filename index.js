const button = document.getElementById("sub--btn");
const deleteButton = document.getElementById("delete-btn");
const content = document.getElementById("content");

button.addEventListener("click", function () {
  const input = document.getElementById("in--field").value;

  if (input == "") {
    alert("Please enter some value!");
  } else {
    const textNode = document.createTextNode(input);

    const paragraph = document.createElement("p");
    paragraph.style.textAlign = "center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Adding line through to the text if checkbox is clicked

    checkbox.addEventListener('click',function(){
      const checkboxes = content.querySelectorAll('input[type="checkbox"]:checked');
      checkboxes.forEach(function (checkbox) {
        const paragraph = checkbox.parentNode;
        if (checkbox.checked) {
          paragraph.style.textDecoration = 'line-through';
        } else {
          paragraph.style.textDecoration = 'none';
        }
        
        checkbox.addEventListener('change', function(){
          if(checkbox.checked){
            paragraph.style.textDecoration = 'line-through'
          }
          else{
            paragraph.style.textDecoration = 'none'
          }
        })
        

      });
    })

    paragraph.appendChild(checkbox);
    paragraph.appendChild(textNode);
    content.appendChild(paragraph);
  }

  document.getElementById("in--field").value = ""; // Clear input field
});

deleteButton.addEventListener("click", function () {
  const checkboxes = content.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    const paragraph = checkbox.parentNode;

    setTimeout(function () {
      content.removeChild(paragraph);
    }, 0);
  });
});
