function reverse(x) {
    let rev = 0;
    let sign = x < 0 ? -1 : 1

    x = Math.abs(x);

    while (x > 0) {
        digit = x % 10
        rev = rev * 10 + digit;  //is used to shift digits left before adding the new digit.
        x = Math.floor(x / 10)
    }
    return rev * sign;
}


console.log(reverse(-123))