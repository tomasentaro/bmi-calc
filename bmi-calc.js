function calcBmi() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var bmi = weight / Math.pow(height / 100, 3)
    document.getElementById("bmi").value = bmi
}