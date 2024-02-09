function validateForm() {
  var pw1 = document.getElementById("pswd1").value;
  var pw2 = document.getElementById("pswd2").value;

  if (pw1 == "") {
    document.getElementById("message1").innerHTML = "**Password pehla";
    return false;
  }
  if (pw2 == "") {
    document.getElementById("message2").innerHTML = "**   Dusra Password Likh";
    return false;
  }
  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }
  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }
  if (pw1 != pw2) {
    document.getElementById("message2").innerHTML = "**Passwords are not same";
    return false;
  }
}
