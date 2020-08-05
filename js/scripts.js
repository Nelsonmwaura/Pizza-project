var price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;

    this.topping = topping;
    this.total = total;
}


// proceed button
$(document).ready(function () {
    $("button.proceed").click(function (event) {
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function () {
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        switch (psize) {
            case "0":
                price = 0;
                break;
            case "large":
                price = 1200;
                console.log(price);
                break;
            case "medium":
                price = 850;
                console.log("The price is " + price);
                break;
            case "small":
                price = 600;
                console.log(price);
            default:
                console.log("error");
        }
        switch(pcrust){
            case "0":
              crust_price = 0;
            break;
            case "Cheese-Stuffed Crust":
              crust_price = 3;
            break;
            case "Pizza Bagels":
              crust_price = 2;
            break;
            case "Thin Crust":
              crust_price = 1;
            break;
            case "Flatbread":
              crust_price = 1;
            break;
            case "Thin Crust":
              crust_price = 1;
            break;
            case "Sicilian Style":
              crust_price = 2;
            break;
            case "Chicago Deep Dish":
              crust_price = 2;
            break;
            default:
              console.log("No price"); 
          }
        let topping_value = ptopping.length * 50;
        console.log("toppins value" + topping_value);

        if ((psize == "0") && (ptopping == "0")) {
            console.log("nothing selected");
            $("button.proceed").show();
            $("#information").show();
            $("div.choice").hide();
            alert("Please select pizza size and crust");
        }
        else {
            $("button.proceed").hide();
            $("#information").hide();
            $("div.choice").slideDown(1000);
        }

        total = price + topping_value;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzatopping").html(ptopping.join(", "));
        $("#totals").html(total);

        $("button.addPizza").click(function () {
            let pname = $(".name option:selected").val();
            let psize = $("#size option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function () {
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(", "));
            switch (psize) {
                case "0":
                    price = 0;
                    break;
                case "large":
                    price = 1200;
                    console.log(price);
                    break;
                case "medium":
                    price = 850;
                    console.log("The price is " + price);
                    break;
                case "small":
                    price = 600;
                    console.log(price);
                default:
                    console.log("error");
            }
            let topping_value = ptopping.length * 50;
            console.log("toppins value" + topping_value);
            total = price + crust_price + topping_value;
            console.log(total);

            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);

            var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

            $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
            console.log(newOrder);

        });

        $("button#checkout").click(function () {
            $("button#checkout").hide();
            $("button.addPizza").hide();
            $("button.deliver").slideDown(1000);
            $("#addedprice").slideDown(1000);
            console.log("Your total bills is sh. " + checkoutTotal);
            $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
        });

        $("button.deliver").click(function () {
            $(".pizzatable").hide();
            $(".choice h2").hide();
            $(".delivery").slideDown(1000);
            $("#addedprice").hide();
            $("button.deliver").hide();
            $("#pizzatotal").hide();
            let deliveryamount = checkoutTotal + 150;
            console.log("You will pay sh. " + deliveryamount + " on delivery");
            $("#totalbill").append("Your bill plus delivery fee is: " + deliveryamount);
        });
        $("button#final-order").click(function (event) {
            event.preventDefault();

            $("#pizzatotal").hide();
            $(".delivery").hide();
            $("button#final-order").hide();
            let deliveryamount = checkoutTotal + 150;
            console.log("Final Bill is: " + deliveryamount);
            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();

            if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

                $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
                $("#totalbill").hide();
                $("#finallmessage").slideDown(1200);
            }
            else {
                alert("Please fill in the details for delivery!");
                $(".delivery").show();
                $("button#final-order").show();
            }
        });
        event.preventDefault();
    });
});