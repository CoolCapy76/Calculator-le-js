let num1 = getElementById("num1");
let num2 = getElementById("num2");
let sub = getElementById("sub");
let sum;
    switch (sub) {
        case "+":
            sum = $num1 + $num2;
            
            break;

        case "-":
            sum = num1 - num2;
            
            break;

        case "*":
            sum = num1 * num2;
            
            break;

        case "/":
            if (num2 == 0) {
                alert("Error: Division by zero");
                break;
            }
            sum =$num1 / num2;
            
            break;

        default:
            echo "Operator not set";
            break;
    }