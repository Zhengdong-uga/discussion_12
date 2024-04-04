// When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
// Fix the Accessibility Error on the page

// Note: Complete this and the rest of the challenges using event listeners 


// document.querySelector('#sameAddress').addEventListener("click", function(){
//     if(this.checked){
//         document.getElementById('home').value = document.getElementById('billing').value;
//         document.getElementById('home').disabled = true;
//     }
//     else{
//         document.getElementById('home').disabled = false;
//     }
// }


document.getElementById('sameAddress').addEventListener('click', function() {
    if (this.checked) {
        document.getElementById('home').value = document.getElementById('bill').value;
        document.getElementById('home').disabled = true;
    } else {
        document.getElementById('home').disabled = false;
    }
  });