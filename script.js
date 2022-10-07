var selectedRow = null;

function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewProduct(formData);
    }
    else
    {
        updateRecord(formData);
    }
    
    resetForm();
}
    



//retrieve the data
function readFormData(){
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

//Insert data
function insertNewProduct(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.id;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.name;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.gender;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.age;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button>  <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.age;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}


//Reset the data
function resetForm(){
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
}

function my_function(){
    if(document.getElementById('gender_male').checked)
    {
        var gender="male"
        document.getElementById("my_myoutput").innerHTML=("your "+gender);
    }
    else{
        if(document.getElementById('gender_female').checked)
    {
        var gender="female"
        document.getElementById("my_myoutput").innerHTML=("your "+gender);
    }
    }
}