function calculateTip(){
    var billAmt = document.getElementById("billamt").value;

    var service = document.getElementById("service").value;

    var numOfPeople = document.getElementById("eachamt").value;

// input
    if(billAmt === "" || service == 0){
        alert("Please enter the values..");
        return;
    }

    if(numOfPeople === "" || numOfPeople<=1){
        numOfPeople=1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }

    var total = (billAmt*service) / numOfPeople;

    total = Math.round(total*100)/100;

    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};