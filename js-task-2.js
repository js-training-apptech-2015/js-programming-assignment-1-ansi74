function solution2(A, B) {
    maxXOR = 0;
    while (A < B) {
        var C = A + 1;
        while (C <= B) {
            curXOR = A ^ C;
            if (maxXOR < curXOR) {
                maxXOR = curXOR;
            }
            C++;
        }
        A++;
    }
    return console.log(maxXOR);
} 