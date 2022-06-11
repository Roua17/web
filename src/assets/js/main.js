var user = document.querySelector("#user");
user.addEventListener('keyup',function()
{
var u_times = document.querySelector('u-times');
var u_check= document.querySelector('u-check');
if (user.value.length==0 || user.value.length <3){
	user.style.border = '1px solid red ';
	u_times.style.display ='block'
	 u_check.style.display ='none';
	 return false;

}else{
	user.style.border='1px solid green';
	u_times.style.display ='none';
	u_check.style.display ='block';
}
})


var pass = document.querySelector("#user");
pass.addEventListener('keyup',function()
{
var u_times = document.querySelector('u-times');
var u_check= document.querySelector('u-check');
if (user.value.length==0 || user.value.length <4){
	user.style.border = '1px solid red ';
	u_times.style.display ='block'
	 u_check.style.display ='none';
	 return false;

}else{
	user.style.border='1px solid green';
	u_times.style.display ='none';
	u_check.style.display ='block';
}
})
function validate(){
	console.log(user);
    var username=document.getElementById("user").value;
   var password=document.getElementById("pass").value;
		if(username=="admin" && password=="12345")
    	{
return true;	}
		else{
  				 alert("login failed");
					return false;	}	}