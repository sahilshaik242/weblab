function verifyuser(){   
var username=document.getElementById("username").value;
var email=document.getElementById("email").value;
var phn=document.getElementsByName("phone")[0].value;
var pw=document.getElementById("pass").value;
var cpw=document.getElementById("repass").value;
console.log(username,email,phn,pw,cpw);
var c=true;
if ((username.length <6) || (username.indexOf(' ') >= 0))
    {
        // document.getElementById("uerror").innerHTML='Invalid username';
alert("invalid username");
        c=false;
    }
if (pw.length <8)
{
    alert('Password must be 8 characters long .')
}
else{
    var cap=0,small=0,sp=0,num=0;

    for(i=0;i<pw.length;i++)
    {
        if (pw.charCodeAt(i)>=65 && pw.charCodeAt(i)<=90)
         cap=1;
        else if (pw.charCodeAt(i)>=97 && pw.charCodeAt(i)<=122)
         small=1;
         else if (pw.charCodeAt(i)>=48 && pw.charCodeAt(i)<=57)
         num=1;
        else
        sp=1;
    }

    if(cap==0 || small ==0|| sp ==0|| num==0)
    c=false;

   if (cap==0)
   alert("PAssword must conatain capital letter ")
   else if (small==0)
   alert("Password must conatain small letter ")
   else if (num==0)
   alert("PAssword must conatain numeric character ")
   else if (sp==0)
   alert("PAssword must conatain special symbol ")

    console.log(cap);

}
    if(pw!=cpw){
        alert("Password and confirm password are not matched");
        c=false;
    }

    if(phn.length!=10)
    {  
        // && phn.charCodeAt(0)>=57
        
        alert("invalid phone number");
        c=false;
    }
    else{
        // console.log(phn.charCodeAt(0))
        if (phn.charCodeAt(0)<54)
        {
            alert("invalid phone number");
        c=false;
        }
    }

    let at=1,dot=1;
    for(i=0;i<email.length;i++)
    {
        if(email[i]=='@')
        at=0;
        else if(email.substr(i)=='.com')
        dot=0;
    }

    if(at||dot)
    {
        c=false;
        alert('Invalid email.')
    }

    if(c){
        alert("Registered successfully")
    }
}

