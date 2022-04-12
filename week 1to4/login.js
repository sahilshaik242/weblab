function verifylogin() {  
  var username=document.getElementById("user").value;
  var password=document.getElementById("pwd").value;
  console.log(username, password);
  var c=true;

  if ((username.length <6) || (username.indexOf(' ') >= 0))
  {
      alert('Invalid username');
      c=false;
  }
  var pattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
  if ((password.length<8) || (password.indexOf(' ') >= 0) || (!pattern.test(password))|| !password)
  {
      alert("Invalid password")
      c=false;
  }

  if(c){

      alert("succesfully logged in !")
  }

  } 