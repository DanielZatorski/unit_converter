//DOM WIRING

const placeholderEl = document.getElementById("placeholder")

//console.log(placeholderEl)

const lengthEl = document.getElementById("result-1")
const volumehEl = document.getElementById("result-2")
const massEl = document.getElementById("result-3")

const btnEl = document.getElementById("convert-btn")

//console.log(btnEl)


btnEl.addEventListener( "click", function(){

    //console.log(conversion(placeholderEl.value))

    let conversionResultMetric = conversion_metric(placeholderEl.value)
    let conversionResultImperial = conversion_imperial(placeholderEl.value)

    //console.log(conversionResult)
    //console.log(conversionResult.length)

    lengthEl.textContent = `${placeholderEl.value} meters = 
    ${Number(conversionResultMetric[0]).toFixed(3)} feet | 
    ${placeholderEl.value} feet = 
    ${Number(conversionResultImperial[0]).toFixed(3)} meters
    `
    volumehEl.textContent = `${placeholderEl.value} liters = 
        ${Number(conversionResultMetric[1]).toFixed(3)} gallons | 
        ${placeholderEl.value} gallons = 
        ${Number(conversionResultImperial[1]).toFixed(3)} liters
        `
    massEl.textContent = `${placeholderEl.value} kilos = 
        ${Number(conversionResultMetric[2]).toFixed(3)} pounds | 
        ${placeholderEl.value} pounds = 
        ${Number(conversionResultImperial[1]).toFixed(3)} kilos
        `
})

//define conversion ratios

const meter = 3.281 //feet
const liter = 0.264 //gallon
const kilogram = 2.204 //pound

//conversion function
function conversion_metric(input){

    
    const result_1 = input*meter
    const result_2 = input*liter
    const result_3 = input*kilogram
    
    results = [result_1,result_2,result_3]

    return results

}

function conversion_imperial(input){

    
    const result_1 = input/meter
    const result_2 = input/liter
    const result_3 = input/kilogram
    
    results = [result_1,result_2,result_3]

    return results

}



