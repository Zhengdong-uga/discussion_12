// function challenge1(element){
//     console.log(element.checked);
//     if (element.checked){
//       document.getElementById("emailDiv").style.display = "block";
//     } else {
//       document.getElementById("emailDiv").style.display = "none";
//     }
//   }

document.querySelector("#subscribe").addEventListener("click", function(){
    console.log("this works")

    if(this.checked){
        document.getElementById("emailDiv").style.display = "block";
    }
    else{
        document.getElementById("emailDiv").style.display = "none";
    }
    });


// challenge 2
  document.addEventListener('click', function(){
    let currentTime = new Date();
    alert ("Current Time" +currentTime);
})

