function getNumberOfEven (n) {
    let count = 0;
    let str = n.toString();

    for ( let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 === 0)
            count++;
    }

    return count;
}

alert (getNumberOfEven(256679));