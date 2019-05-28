function validate() {
    $('.error').html('');
    if ($('#username').val() == null
        || $('#username').val() == '') {
        $('#username').parent().next().html('Username is required !!!');
        return false;
    }

    if ($('#pwd').val() == null || $('#pwd').val() == '') {
        $('#pwd').parent().next().html('Password is required !!!');
        return false;
    }

    return true;

}