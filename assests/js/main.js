var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
        modal.style.display = "none";
    }
}

function readFormData() {
    var formData = {};
    formData["SlNo"] = document.getElementById("SlNo").value;
    formData["userName"] = document.getElementById("userName").value;
    formData["loginId"] = document.getElementById("loginId").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["status"] = document.getElementById("status").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.SlNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.loginId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dateOfBirth;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mobile;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.status;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("SlNo").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("loginId").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("status").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("SlNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("userName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("loginId").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[4].innerHTML;
    document.getElementById("status").value = selectedRow.cells[5].innerHTML;
   modal.style.display = "block";
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.SlNo;
    selectedRow.cells[1].innerHTML = formData.userName;
    selectedRow.cells[2].innerHTML = formData.loginId;
    selectedRow.cells[3].innerHTML = formData.dateOfBirth;
    selectedRow.cells[4].innerHTML = formData.mobile;
    selectedRow.cells[5].innerHTML = formData.status;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNameValidationError").classList.contains("hide"))
            document.getElementById("userNameValidationError").classList.add("hide");
    }
    return isValid;
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
 
btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }