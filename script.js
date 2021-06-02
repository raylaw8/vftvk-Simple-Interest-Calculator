function compute()
{
    if (validateAmt()) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        // display back the result
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"\</mark\>%\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>"
//      document.getElementById("result").innerText="If you deposit " + principal + ", at an interest rate of " + rate +"%." + "You will receive an amount of " + interest + ", in the year " + year;
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    // display back the rateval
    document.getElementById("rate_val").innerText=rateval;
}
// validate principal is larget than 0
function validateAmt() 
{
    var principal = document.getElementById("principal").value;
    // if principal is less than or equal to zero do alert, focus for principal field and return false
    if (principal <= 0) {  
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false
    }
    return true
}
        