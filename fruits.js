
function showFruitWithIfElse() {
    var text;
    var fruit = document.getElementById("fruitbox").value
   // var fruit = "apple"
   
    if (fruit == "banana") {
        text = "Did you know that Monkeys love bananas"
    } else if (fruit == "mango") {
        text = "Mangoes grow in Big trees"
    } else if (fruit == "lemon") {
        text = "Lemon is good for your health"
    }
    else {
        text = "You like " + fruit
    }

    //console.log(text)

    document.getElementById("fruit-p-id").textContent =  text
}



function showFruitWithSwitch() {
    var text;
    var fruit = document.getElementById("fruitbox").value
   
   
      switch (fruit) {
        case "banana":
            text = "Did you know that Monkeys love bananas"
            break;
        case "mango":
            text = "Mangoes grow in Big trees"
            break;
        case "lemon":
            text = "Lemon is good for your health"
            break;
        default:
            text = "You like " + fruit
            break;
      }
    document.getElementById("fruit-p-id").textContent =  text
}


