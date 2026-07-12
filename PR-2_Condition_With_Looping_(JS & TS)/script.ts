// Basic Programmes

// Ans - 1

{
    console.log("============ [1] ============");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) console.log(i);
        else continue;
    }
}

// Ans - 2

{
    console.log("============ [2] ============");

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) continue;
        else console.log(i);
    }
}

// Ans - 3

{
    console.log("============ [3] ============");

    let num: number = Number(prompt("Enter the value of N (3rd) :-") ?? "0");
    let sum = 0

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    console.log(`Sum Is :- ${sum}`);
}

// Ans - 4

{
    console.log("============ [4] ============");

    function isPrime(x: number) {
        if (x <= 1 || isNaN(x)) {
            return false;
        }
        if (x === 2) return true;

        if (x % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(x); i += 2) {
            if (x % i === 0) {
                return false;
            }
        }

        return true;
    }

    for (let i = 1; i <= 20; i++) {
        if (isPrime(i)) console.log(`${i} -> Prime`);
        else console.log(`${i} -> Not Prime`);
    }
}

// Ans - 5

{
    console.log("============ [5] ============");

    console.log("Multiplication Table of 13 :-");
    let mT = 13
    for (let i = 1; i <= 10; i++) {
        console.log(`${mT} * ${i} = ${mT * i}`);
    }
}

// Ans - 6

{
    console.log("============ [6] ============");

    let str = "Hello I am Prince, I am a Full Stack Web Developer."
    let vowels = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'A' || str[i] == 'a' || str[i] == 'E' || str[i] == 'e' || str[i] == 'I' || str[i] == 'i' || str[i] == 'O' || str[i] == 'o' || str[i] == 'U' || str[i] == 'u') vowels++;
    }
    console.log(`Total Vowels In string (${str}) is :- ${vowels}`);

}

// Ans - 7

{
    console.log("============ [7] ============");

    let num = 1234
    console.log(`Original Number :- ${num}`);
    let rev = 0
    while (num != 0) {
        rev += num % 10
        if (num >= 10) rev *= 10;
        num = Math.trunc(num / 10)
    }

    console.log(`Reversed Number :- ${rev}`);

}

// Ans - 8

{
    console.log("============ [8] ============");

    let num = 5
    let fact = 1
    for (let i = num; i >= 1; i--) {
        fact *= i;
    }
    console.log(`Factorial Of ${num} = ${fact}`);

}

// Ans - 9

{
    console.log("============ [9] ============");

    let fbnNum = new Array()

    for (let i = 0; i < 10; i++) {
        let fbn = 0

        if (i == 0) fbn = 1
        else if (i == 1) fbn = fbnNum[i - 1]
        else fbn = fbnNum[i - 1] + fbnNum[i - 2]

        fbnNum.push(fbn)
    }

    console.log(`Fibonnaci Series (10):- ${fbnNum}`);

}

// Ans - 10

{
    console.log("============ [10] ============");

    function isArmstrong(num: number) {
        const numStr: string = num.toString()
        const power: number = numStr.length
        let sum = 0

        for (let char of numStr) {
            sum += Math.pow(parseInt(char), power)
        }

        return sum === num
    }

    let num = 153

    console.log(`The Number ${num} is Armstrong :- ${isArmstrong(num)}`);

}

// Ans - 11

{
    console.log("============ [11] ============");

    const regShit = ['P', 'A', 'P', 'P', 'A', 'P', 'A', 'P', 'P', 'A', 'P', 'A', 'P', 'P', 'A', 'P', 'A', 'P', 'P', 'A', 'P', 'A', 'P', 'P', 'A', 'P', 'A', 'P', 'P', 'A']

    let count = 0
    for (let char of regShit) {
        if (char == 'P') count++;
        else continue;
    }

    let totalAttend = (count * 100) / regShit.length

    if (totalAttend < 75) console.log(`Your Attendance is ${totalAttend}%\nYou are not eligible for exam.`);
    else console.log(`Your Attendance is ${totalAttend}%\nYou are eligible for exam.`);

}

// Ans - 12

{
    console.log("============ [12] ============");
    const studMarks = [78, 65, 93, 33, 98, 67, 58, 78, 86, 82]
    let cn = 1

    for (let i of studMarks) {
        let grade
        if (i >= 95) grade = "A+";
        else if (i >= 90) grade = "A1";
        else if (i >= 80) grade = "A2";
        else if (i >= 70) grade = "B1";
        else if (i >= 60) grade = "B2";
        else if (i >= 50) grade = "C1";
        else if (i >= 40) grade = "C2";
        else grade = "F";

        console.log(`Student ${cn}'s Marks is ${i}, Grade :- ${grade}`);
        cn++
    }
}

// Ans - 13


{
    console.log("============ [13] ============");

    function noteDispenser(amount: number) {
        let note1 = 0
        let note2 = 0
        let note3 = 0
        console.log(`Reqiured notes for ${amount} :-`);

        while (amount != 0) {
            if (amount >= 2000) {
                note1 = Math.trunc(amount / 2000)
                amount %= 2000
            }
            else if (amount >= 500) {
                note2 = Math.trunc(amount / 500)
                amount %= 500
            }
            else if (amount >= 100) {
                note3 = Math.trunc(amount / 100)
                amount %= 100
            }
        }

        console.log(`2000 Notes => ${note1}\n500 Notes => ${note2}\n100 Notes => ${note3}`);

    }

    console.log(noteDispenser(3700));

}


// Ans - 14

{
    console.log("============ [14] ============");

    function discountChecker(price: number) {
        if (price >= 1000) {
            price = price - (price * 0.1)
            console.log(`Hurrah you got 10% Discount...!!\nYour Total Bill is : ${price}`);
        }
        else if (price >= 500) {
            price = price - (price * 0.05)
            console.log(`Hurrah you got 5% Discount...!!\nYour Total Bill is : ${price}`);
        }
        else {
            console.log(`You don't get any discount... Your Total Bill is : ${price}`);
        }
    }

    console.log(discountChecker(1200));

}

// Ans - 15

{
    console.log("============ [15] ============");

    let attempt = 3

    while (attempt != 0) {
        let orgPswd = 1234
        let pswd = Number(prompt(`(15th) Enter the password You have ${attempt} attempts left :- `))

        if (pswd == orgPswd) break;

        attempt--;
    }

    if (attempt == 0) console.log("Incorrect Password (Refresh the Page to enter password again.");
    else if (attempt > 0) console.log("Correct Password...");

}

// Ans - 16

{
    console.log("============ [16] ============");
    
    let units = 120
    let totalBill = 0
    
    // ₹3.20/unit (first 50 units), ₹3.95/unit (next 150 units), ₹4.25/unit (next 150 units), and ₹5.05/unit (above 250 units.
    
    if (units <= 50) {
        totalBill = 3.20 * units
    }
    else if (units <= 200) {
        totalBill = 3.20 * 50
        totalBill += 3.95 * (units - 50)
    }
    // else if(units <= 150){
        //     totalBill = 3.20 * 50
        //     totalBill += 3.65 * 50
        //     totalBill += 4.25 * (units - 100)
        // }
        // else if(units > 150){
            //     totalBill = 3.20 * 50
            //     totalBill += 3.65 * 50
            //     totalBill += 4.25 * 100
    //     totalBill += 5.05 * (units - 150)
    // }
    
    console.log(`Your Bill with total unit ${units} is :- ${totalBill}`);
    
}

// Ans - 17

{
    console.log("============ [17] ============");
    
    const studMarks = [
        { name: "Ishaan Verma", marks: 91 },
        { name: "Meera Nair", marks: 78 },
        { name: "Devansh Kulkarni", marks: 64 },
        { name: "Riya Sen", marks: 88 },
        { name: "Arjun Malhotra", marks: 33 },
        { name: "Kavya Iyer", marks: 95 },
        { name: "Reyansh Gupta", marks: 32 },
        { name: "Sanya Kapoor", marks: 82 },
        { name: "Vivaan Saxena", marks: 70 },
        { name: "Sneha Reddy", marks: 86 }
    ];
    
    for(let i in studMarks){
        let result
        if(studMarks[i].marks > 35) result = "PASS";
        else result = "FAIL";
        
        console.log(`Student ${studMarks[i].name} with marks ${studMarks[i].marks} is ${result}.`);
        
    }
}

// Ans - 18

{
    console.log("============ [18] ============");
    console.log("Answer is in document");
    
    document.write("<h4>Question - 18 Answer</h4>")
    
    for(let i = 1; i <= 5; i++){
        
        for(let j = 4; j >= i; j--){
            document.write("&nbsp;&nbsp;")
        }
        for(let k = 1; k <= i; k++){
            document.write("*")            
        }
        
        document.write("<br>")            
    }
}

// Ans - 19

{
    console.log("============ [19] ============");
    
    const ary = [42, 87, 15, 93, 64, 71, 28, 55, 99, 10, 36, 82, 5, 68, 47, 73, 19, 52, 90, 61]
    let max = ary[0]
    let min = ary[0]
    for(let i of ary){
        if(i > max) max = i;
        if(i < min) min = i;
    }
    
    console.log(`The Array is :- ${ary}\nLargest Number is :- ${max}\nSmallest number is :- ${min}`);
    
}

// Ans - 20

{
    console.log("============ [20] ============");
    console.log("Answer is in document");
    
    document.write("<h4>Question - 20 Answer</h4>")
    for(let i = 1; i <= 100; i++){
        let prt = i.toString();
        
        if(i % 3 == 0) prt = "Fizz";
        
        if(i % 5 == 0) prt = "Buzz"; 

        if((i % 3 == 0) && (i % 5 == 0)) prt = "FizzBuzz";

        document.write(`${prt}<br>`);
    }
    
}