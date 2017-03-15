

$(function() {
    //Original state
    var oriState = $(".display").html();
    //Store input
    var inputs = [""];
    //total
    var total;
    //without dot oprator
    var oper1 = ["+", "-", "/", "*"];
    //with dot operator
    var oper2 = ["."];
    //validation number
    var nums = [0,1,2,3,4,5,6,7,8,9];

    //get value from button
    function getValue(input) {
        if(oper2.includes(inputs[inputs.length-1] === true && input===".")){
            console.log("Duplicate dots")
        }else if (inputs.length === 1 && oper1.includes(input) === false) {
            inputs.push(input);
        }else if (oper1.includes(inputs[inputs.length-1]) === false) {
            inputs.push(input);
        }else if (nums.includes(Number(input))) {
            inputs.push(input);
        }
        updateValue();
    }
    //update display field
    function updateValue() {
        total = inputs.join("");
        $(".display").html(total);
    }
    //get total value
    function getTotal() {
        total = inputs.join("");
        $(".display").html(eval(total));
    }


    $("a").click(function(e) {
        e.preventDefault();
        if($(this).attr('id') === "clear-all"){
            inputs = [""];
            $(".display").html(oriState);
            updateValue();
        }else if ($(this).attr('id') === "clear-one") {
            inputs.pop();
            updateValue();
        }else if ($(this).attr('id') === "total") {
            getTotal();
        }else {
            if (inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".")=== -1) {
                getValue($(this).html());
            } else {
                getValue($(this).html());
            }
        }
    });
});
