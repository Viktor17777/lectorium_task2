    function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
{
    alert("Valid email address!");
    return true;
}
    else
{
    alert("Invalid email address!");
    return false;
}
}
