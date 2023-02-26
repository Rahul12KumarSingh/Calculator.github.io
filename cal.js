//keyboard event listener 

document.addEventListener("keypress", function(event) {

   user_input = event.key ;

   if(user_input == "=" || user_input == "Enter") {

   s = document.getElementById("input").value ;
   result = eval(s);
   
   document.getElementById("input").value = result ;
 }

})


// function calling bia button event listener 
function func1() {
  var user_input = this.innerHTML;
   
  var x =  document.getElementById("input").value ;

  if(user_input == "="){
    result = eval(x);
    document.getElementById("input").value = result ;
  }

 else if(user_input == 'C')
    {
      document.getElementById("input").value = "" ;
    }

  else {  
    x = x + user_input ;
    document.getElementById("input").value = x ;
  }

}


// button event listener 
var x = document.querySelectorAll("button") ;

for (var i = 0; i < x.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", func1);
}


