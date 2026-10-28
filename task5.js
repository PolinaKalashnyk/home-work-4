function digitN(k, n) {
    let number = k;

    for (let i = 1; i < n; i++) {
        number = Math.floor(number / 10);
    }

    if (number === 0) {
        return -1;
    }

    return number % 10;
}
