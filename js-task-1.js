function solution1(A, B, C) {
    if (A < B && C > 0) {
        return console.log("Jhon travelled " + Math.ceil((B - A) / C) + " days");
    } 
    else {
        return console.log("Error");
    }
} 