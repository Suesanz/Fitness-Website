var weight, height, measure, error, customRadioInline1, customRadioInline2, customRadioInline3,
    customRadioInline4, customRadioInline5, maletdee, femaletdee, age, fat, carbs, calories, protein


function macrosCalc() {
    age = document.getElementById("age").value
    weight = document.getElementById("weight").value
    height = document.getElementById("height").value
    customRadioInline1 = document.getElementById("customRadioInline1").value
    customRadioInline2 = document.getElementById("customRadioInline2").value
    customRadioInline3 = document.getElementById("customRadioInline3").value
    customRadioInline4 = document.getElementById("customRadioInline4").value
    customRadioInline5 = document.getElementById("customRadioInline5").value
    maletdee = 10 * weight + 6.25 * height - 5 * age + 5
    femaletdee = 10 * weight + 6.25 * height - 5 * age - 161
    error = "Invalid values"

    if (customRadioInline1===true) {
        if (customRadioInline3) {
             fat =(weight*0.87)
             carbs = (weight * 2) + 100
             protein = weight * 2 + 20
             calories = weight * 36
        } else if (customRadioInline4) {
             fat =(weight*9.7)
             carbs = (weight * 2) + 140
             protein = weight * 2 + 30
             calories = weight * 36
        } else {
             fat = weight*0.97
             carbs = (weight * 2) + 120
             protein = weight * 2 + 10
             calories = weight * 36
        }
    } else {
        if (customRadioInline3) {
             fat = weight*0.87
             carbs = (weight * 2) + 80
             protein = weight * 2 + 20
             calories = weight * 36
        } else if (customRadioInline4) {
             fat = weight*0.97
             carbs = (weight * 2) + 140
             protein = weight * 2 + 20
             calories = weight * 36

        } else {
             fat = weight*0.97
             carbs = (weight * 2) + 140
             protein = weight * 2
             calories = weight * 36
        }

    }
    if (weight === 0 || height === 0) {
        document.getElementById("results").innerHTML = error
    }
    else {

        document.getElementById("results1").innerHTML = "Fat = "+fat.toFixed(2)+" G per day"
        document.getElementById("results2").innerHTML = "Carbs = "+carbs+" G per day"
        document.getElementById("results3").innerHTML = "Protein = "+protein+" G per day"
        document.getElementById("results4").innerHTML = "Calories = "+calories+" Calories per day"
    }
}