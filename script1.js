var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["password"] = document.getElementById("password").value;
    formData["degree"] = document.getElementById("degree").value;
    formData["gen"] = document.querySelector('input[name= "gen"]:checked').value;
    formData["address"] = document.getElementById("address").value;
    formData["upload"] = document.getElementById("upload").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tbl").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.password;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.degree;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gen;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.address;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.upload;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<input type="button" name="up" value="Edit" onclick="onEdit(this);" class="btn btn-success">
                        <input type="button" name="del" value="Delete" onclick="onDelete(this);" class="btn btn-danger">`;
}

function resetForm() {
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("dob").value="";
    document.getElementById("password").value="";
    document.getElementById("degree").value="";
    document.querySelector('input[name= "gen"]:checked').value="";
    document.getElementById("address").value="";
    document.getElementById("upload").value="";

    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("password").value = selectedRow.cells[3].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[4].innerHTML;
    document.querySelector('input[name= "gen"]:checked').value = selectedRow.cells[5].innerHTML;
    document.getElementById("address").value = selectedRow.cells[6].innerHTML;
    document.getElementById("upload").value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.password;
    selectedRow.cells[4].innerHTML = formData.degree;
    selectedRow.cells[5].innerHTML = formData.gen;
    selectedRow.cells[6].innerHTML = formData.address;
    selectedRow.cells[7].innerHTML = formData.upload;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tbl").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        alert("Not Working")
    } else {
        isValid = true;
        alert("Working")
    }
    return isValid;
}