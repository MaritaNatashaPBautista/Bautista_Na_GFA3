var num1, num2, num3;

function randomizer_func () {
    num1 = Math.ceil(Math.random()*20);
    num2 = Math.ceil(Math.random()*20);
    num3 = Math.ceil(Math.random()*20);

    document.getElementById("random1").innerHTML = num1;
    document.getElementById("random2").innerHTML = num2;
    document.getElementById("random3").innerHTML = num3;
}

randomizer_func();

function Maximum_number() {
    if (num1 > num2 && num1 > num3) {
        document.getElementById("Max_number").innerHTML = "The competition team with the most members is IMUN with " + num1 +" students.";
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("Max_number").innerHTML = "The competition team with the most members is SMUN with " + num2 +" students.";
    } else if (num3 > num1 && num3 > num2) {
        document.getElementById("Max_number").innerHTML = "The competition team with the most members is PHIMUN with " + num3 +" students.";
    } else if (num1 == num2 && num1 > num3) {
        document.getElementById("Max_number").innerHTML = "The competition teams with the most members is IMUN and SMUN with " + num1 +" students each.";
    } else if (num2 == num3 && num2 > num1) {
        document.getElementById("Max_number").innerHTML = "The competition teams with the most members is SMUN and PHIMUN with " + num2 +" students each.";
    } else if (num1 == num3 && num1 > num2) {
        document.getElementById("Max_number").innerHTML = "The competition teams with the most members is IMUN and PHIMUN with " + num1 +" students each.";
    } else if (num1 == num2 && num1 == num3) {
        document.getElementById("Max_number").innerHTML = "The competition teams with the most members is IMUN, PHIMUN, and SMUN with " + num1 +" students each.";
    }
}

Maximum_number ();

function letter_Pospap() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (num1 == 0) {
        document.getElementById("Pospap").innerHTML = " <br> The first lettter of the name who wrote the best position paper is a";
    } else {
        document.getElementById("Pospap").innerHTML = "<br> The first lettter of the name who wrote the best position paper is " + alphabet.charAt(num1 - 1);
    }
}

letter_Pospap ();


function time_Pospap() {
    document.getElementById("Time_minutes").innerHTML = "<br> The average time it took to complete a single position paper is "+ num2 * num3+" minutes.";
    document.getElementById("Time_hours_minutes").innerHTML ="or "+ Math.floor((num2 * num3)/60) + "hr " + (num2 * num3)%60 + "min";
}

time_Pospap ();

