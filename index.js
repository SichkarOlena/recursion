function checker2(number, result = '') {
    try {
        if (number === 0) {
            return result;
        }

        if (number > 0) {
            result = `(${result})`;
            return checker2(number - 1, result);
        }

        if (number < 0) {
            throw new Error('Number should be great than 0');
        }
    } catch (e) {
        console.log(e);
    }
}

console.log(checker2(5));


function getDivider(val1, val2) {
    if (val1 > val2) {
        if (val1 % val2 === 0) {
            return val2;
        } else {
            return getDivider(val1, val2 - 1);
        }
    }

}

getDivider(24, 15);