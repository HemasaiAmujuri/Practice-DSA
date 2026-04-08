function parkingCharge(noOfHours) {
    let charges = 0;

    if (noOfHours <= 2) {
        charges = noOfHours * 50;
    } 
    else if (noOfHours <= 5) {
        charges = 2 * 50; // first 2 hours
        charges += (noOfHours - 2) * 30; // next hours
    } 
    else {
        charges = 2 * 50; // first 2 hours
        charges += 3 * 30; // hours 3-5
        charges += (noOfHours - 5) * 20; // after 5 hours
    }

    return charges;
}

// Example:
console.log(parkingCharge(6)); // Output: 210
console.log(parkingCharge(2)); // Output: 100
console.log(parkingCharge(4)); // Output: 140