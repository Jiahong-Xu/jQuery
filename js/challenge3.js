// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;

    // Advanced Answer
//     if(document.querySelector('input[name="fruit"]:checked')){
//         return true;
//     }
//     else{
//     alert("You must pick a fruit!")
//     return false;
// }

 $("form").submit(function(event){
    var a=$('input[name="fruit"]:checked').length;
    var b=$('input[name="standing"]:checked').length;

    if (a==0&& b!=0){
        alert("You must pick a fruit!");
        return false;
    }
    if (b==0&a!=0){
    	alert("You must pick a class!");
        return false;
    }
    if (b==0&a==0){
    	alert("You must pick a class and a fruit!");
        return false;
    }
    else{
        return true;
    }
});

