// select everything
let dropdown           = document.getElementById("dropdown"),
    input              = document.getElementById("input"),
    output             = document.getElementById("output"),
    outputDisplay      = document.getElementById("outputDisplay")
    

//function for the calculations of the results
function calculation(input, dropdown) {
    //look at dropdown
    switch(dropdown) {
        //make cases
        case "km":
            //do calculation for each case
            output.value = (input / 1.609).toFixed(2)
        break
        case "miles":
            return output.value = (input * 1.609).toFixed(2)
        break
        case "liter":
            return  output.value = (input * 4.227).toFixed(2)
        break
        case "cups":
            return output.value = (input / 4.227).toFixed(2)
        break
        case "C":
            return output.value = ((input * (9/5)) + 32).toFixed(0)
        break
        case "F":
            return output.value = ((input / (9/5)) + 32).toFixed(0)
        break
        case "euro":
            return output.value = (input * 1.11504).toFixed(2)
        break
        case "dollar":
            return output.value = (input / 1.11504).toFixed(2)
        break
    }
}


//function for setting the correct unit
function setUnit (dropdown) {
    let unitArr = ["km", "miles", "liter", "cups", "C", "F", "euro", "dollar"],
        index   = unitArr.indexOf(dropdown)

     return index % 2 === 0 ? outputDisplay.textContent = unitArr[index+1] : outputDisplay.textContent = unitArr[index-1]
}

// eventlistener
input.addEventListener("keyup", function() {
    calculation(input.value, dropdown.value)
}) 

dropdown.addEventListener('change', function(){
    calculation(input.value, dropdown.value)
    setUnit(dropdown.value)
})
    


