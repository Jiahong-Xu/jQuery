ch4form.onsubmit = function() {
    var name = document.querySelector("#fullname")
    var address = document.querySelector("#streetaddr")
    console.log(name);
    console.log(address)
    return false;

}
#     var validInput = true;
#     var name = document.querySelector("#fullname")
#     var address = document.querySelector("#streetaddr")
#     console.log("Here");
#     console.log(name);
#     console.log(address)
#     if (name.value.length == 0){
#         document.querySelector("#nameerrormsg").style.display = "block"; 
#         validInput = false;
#     }
#     else {
#         document.querySelector("#nameerrormsg").style.display = "none";
#     }

#     if (address.value.length == 0){
#         document.querySelector("#addrerrormsg").style.display = "block"; 
#         validInput = false;
#     }
#     else {
#         document.querySelector("#addrerrormsg").style.display = "none"; 
#     }

#     return validInput;
# }

# $("form").submit(function(event){
#     var name=$('#fullname').length;
#     var adress=$("#streetaddr").length;
#     if (name==0){
#         $("#nameerrormsg").css("display", "block");
#     }
#     else{
#         $("#nameerrormsg").css("display", "none");
#     }
#     if(adress==0){
#         $("#addrerrormsg").css("display", "block");
#     }
#     else{
#         $("#addrerrormsg").css("display", "none");
#     }
#     })
