// showToast function definition

function showToast(type, message) {
    var toastElement = document.querySelector(".toast." + type);
    var toastBody = toastElement.querySelector(".toast-body");
    toastBody.textContent = message;
  
    var bsToast = new bootstrap.Toast(toastElement);
    bsToast.show();
  }

function newElement() {
    var inputValue = document.getElementById("task").value;
    if (inputValue === "") {
      showToast("error","Cannot add blank characters to the list." );
    } else {
      var li = document.createElement("li");
      li.textContent = inputValue;
      li.addEventListener("click", function () {
        this.classList.toggle("checked");
      });
  
      // silme işlemi
      var closeButton = document.createElement("span");
      closeButton.textContent = "\u00D7";
      closeButton.className = "close";
      closeButton.addEventListener("click", function () {
        var listItem = this.parentElement;
        listItem.style.display = "none";
      });
      li.appendChild(closeButton);
  
      document.getElementById("list").appendChild(li);
      showToast("success", "Added to the list.");
      document.getElementById("task").value = "";
    }
  }
  
 //delete existing items
  window.onload = function () {
    var listItems = document.querySelectorAll("#list li");
    listItems.forEach(function (item) {
      var closeButton = document.createElement("span");
      closeButton.textContent = "\u00D7";
      closeButton.className = "close";
      closeButton.addEventListener("click", function () {
        var listItem = this.parentElement;
        listItem.style.display = "none";
      });
      item.appendChild(closeButton);
    });
  };
  
  // Function to mark done
  var listItems = document.querySelectorAll("#list li");
  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.toggle("checked");
    });
  });