//DOM WIRING

const placeholderEl = document.getElementById("placeholder")

//console.log(placeholderEl)

const lengthEl = document.getElementById("result-1")
const volumehEl = document.getElementById("result-2")
const massEl = document.getElementById("result-3")

const btnEl = document.getElementById("convert-btn")

//console.log(btnEl)


btnEl.addEventListener( "click", function(){

    console.log(conversion(placeholderEl.value))

    let conversionResult = conversion(placeholderEl.value)

    //console.log(conversionResult)
    //console.log(conversionResult.length)

    lengthEl.textContent = Number(conversionResult[0]).toFixed(3);
    volumehEl.textContent = Number(conversionResult[1]).toFixed(3);
    massEl.textContent = Number(conversionResult[2]).toFixed(3)

})

//define conversion ratios

const meter = 3.281 //feet
const liter = 0.264 //gallon
const kilogram = 2.204 //pound

//conversion function
function conversion(input){

    
    const result_1 = input*meter
    const result_2 = input*liter
    const result_3 = input*kilogram
    
    results = [result_1,result_2,result_3]

    return results

}




