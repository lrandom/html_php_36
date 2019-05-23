function resetError() {
    var nodes = document.getElementsByClassName('error');
    for (let index = 0; index < nodes.length; index++) {
        nodes[index].innerHTML = '';
    }
}
function validate() {
    resetError();
    let nodeUserName = document.getElementById('username');
    let value = nodeUserName.value;
    if (value == null || value == '') {
        //alert("The username field is required !!!");
        nodeUserName.parentElement.nextElementSibling.innerHTML = 'The username field is required !!!'
        return false;
    }

    resetError();
    let nodePassword = document.getElementById('pwd');
    value = nodePassword.value;
    if (value == null || value == '' || value.length <= 5) {
        //alert("The password field is required && larger than 5 !!!");
        nodePassword.parentElement.nextElementSibling.innerHTML = 'The password field is required && larger than 5 !!!';
        return false;
    }

    resetError();
    let nodeFullName = document.getElementById("fullname");
    value = nodeFullName.value;
    if (value == null || value == '') {
        //alert("The fullname field is required");
        nodeFullName.parentElement.nextElementSibling.innerHTML = 'The fullname is required';
        return false;
    }

    resetError();
    let nodeAddress = document.getElementById("address");
    value = nodeAddress.value;
    if (value == null || value == '') {
        //alert("The address field is required !!!");
        nodeAddress.parentElement.nextElementSibling.innerHTML = 'The Address field is required';
        return false;
    }

    return true;
}