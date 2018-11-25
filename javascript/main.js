//Exercise 1
function sumTwoNumber(a = 0, b = 0) {
  return a === b ? (a + b) * 3 : a + b;
  //return a === b ? a * 6 : a + b;
}
//Exercise 2
function compareWithNineteen(a = 0) {
  return a > 19 ? (a - 19) * 3 : 19 - a;
  //use Math.abs() to don't care a - 19 or 19 - a
}

//Exercise 3
function maskedNumberDivisibleBy3(a = '') {
    var b = [];
    var numberSum = 0;
    for (var i = 0; i < a.length - 1; i ++) {
        if (a[i] !== '*') {
            numberSum += +(a[i]);
        }
    }
    for (var i = 0; i <= 9; i++) {
        var c = a.replace('*', i);
        if ((numberSum + i) % 3 === 0) {
            b.push(c);
        }
    }
        return b;
}
//Exercise 4
function maskedNumberDivisibleBy6(a = '') {
    var c = maskedNumberDivisibleBy3(a);
    var b = [];
    for (var i = 0; i < c.length - 1; i ++) {
        var st = c[i]; 
        if (st[st.length - 1] % 2 === 0) {
            b.push(st);
        }
    }
        return b;
    }
