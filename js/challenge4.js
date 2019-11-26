// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
  
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none"; 
//     }

//     return validInput;
// }

 $("form").submit(function(event){
    var name=$('#fullname').val();
    var adress=$("#streetaddr").val();

    if((name != "") && (adress != "")){
        $("#nameerrormsg").css("display", "none");
        $("#addrerrormsg").css("display", "none");
        return true;
    }
    if((name == "") && (adress == "")){
        $("#nameerrormsg").css("display", "block");
        $("#addrerrormsg").css("display", "block");
        return false;
    }
    if(adress == "" && (name != "")){
        $("#addrerrormsg").css("display", "block");
        $("#nameerrormsg").css("display", "none");
        return false;
    }
    if((name == "") && (adress != "")){
        $("#nameerrormsg").css("display", "block");
        $("#addrerrormsg").css("display", "none");
        return false;
    }
});
