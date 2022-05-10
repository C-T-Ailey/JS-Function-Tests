// 1.

function addOne(num){
    return (num+1);
}

console.log(addOne(90));
console.log("");

// 2.

function addTwoNumbers(num1,num2){
    return (num1 + num2);
}

console.log(addTwoNumbers(52,106));
console.log(addTwoNumbers(10,90));
console.log("");

// 3.

function sumNumbers(arr){
    let sum=0;
    for(let i=0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sumNumbers([2, 10, -5]));
console.log(sumNumbers([]));

// 4.

function addList(){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(addList());
console.log(addList(1,2,3,4,5));
console.log(addList(50,100,2,9));
console.log("")

// 5.

function computeRemainder(num1,num2){
    if(num2===0){
        return Infinity;
    }
    else {
        return num1 % num2;
    }
}

console.log(computeRemainder(10,2))
console.log(computeRemainder(4,0))
console.log(computeRemainder(10.5, 3))
console.log("")

// 6.

function range(num1,num2){
    arr = []
    if(num1>num2){
        return "First argument must be less than second.";
    }
    else {
        for (i=num1; i<=num2-1; i++){
            arr.push(i);
        }
    }
    return arr;
}

console.log(range(0,18));
console.log(range(18,0));
console.log("")


// 7.

function reverseUpcaseString(text){
    reverse = ""
    for(let i = text.length-1; i>=0; i--){
        reverse += text[i]
    }
    return reverse.toUpperCase();
}

console.log(reverseUpcaseString("Testing Reverse"));
console.log("")


// 8.

function removeEnds(text){
    if (text.length < 3){
        return "";
    }
    else {
        return text.slice(1,text.length-1)
    }
}

console.log(removeEnds("Testing trim"))
console.log("")


