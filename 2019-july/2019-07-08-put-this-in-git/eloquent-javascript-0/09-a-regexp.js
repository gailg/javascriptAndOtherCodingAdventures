// re1 is created using a RegExp constructor
// re2 is written as a literal value

let re1 = new RegExp("abc");
let re2 = /abc/;
console.log("-----re1 == re2");
console.log(re1 == re2);
console.log("-----re1");
console.log(re1);
console.log("-----re2");
console.log(re2);
console.log("-----re1 == re2");
console.log(re1 == re2);
console.log("-----/abc/ == /abc/");
console.log(/abc/ == /abc/);
console.log("-----[1, 2, 3] == [1, 2, 3]");
console.log([1, 2, 3] == [1, 2, 3]);

let eighteenPlus = /eighteen\+/;
console.log("-----eighteenPlus");
console.log(eighteenPlus);
console.log(`-----/abc/.test("abcdef")`);
console.log(/abc/.test("abcdef"));
console.log(`-----/abc/.test("abxde")`);
console.log(/abc/.test("abxde"));
console.log(`-----"dtabc".indexOf("abc");`);
console.log("dtabc".indexOf("abc"));
console.log(`-----"abxd".indexOf("abc")`);
console.log("abxd".indexOf("abc"));
console.log(`-----/[0123456789]/.test("July 14, 2019")`);
console.log(/[0123456780]/.test("July 14, 2019"));
console.log(`-----/[0123456789]/.test("July fourteenth")`);
console.log(/[0123456780]/.test("July fourteenth"));
console.log(`-----/[0-9]/.test("July 14, 2019")`);
console.log(/[0123456780]/.test("July 14, 2019"));
console.log(`-----/[0-9]/.test("July fourteenth")`);
console.log(/[0123456780]/.test("July fourteenth"));
let year = /\d\d\d\d/;
console.log(`-----year.test("2019")`)
console.log(year.test("2019"));
console.log(`-----year.test("19")`)
console.log(year.test("19"));
let notBinary = /[^01]/;
console.log(`-----notBinary.test("0101010100001111011")`);
console.log(notBinary.test("0101010100001111011"));
console.log(`-----notBinary.test("0101010100201111011")`);
console.log(notBinary.test("0101010100201111011"));
console.log(`-----/'\d+'/.test("'123'")`);
console.log(/'\d+'/.test("'123'"));
console.log(`-----/'\d+'/.test("''")`);
console.log(/'\d+'/.test("''"));
console.log(`-----/'\d*'/.test("''")`);
console.log(/'\d*'/.test("''"));
let neighbor = /neighbou?r/;
console.log(`-----neighbor.test("neighbor")`)
console.log(neighbor.test("neighbor"));
console.log(`-----neighbor.test("neighbour")`)
console.log(neighbor.test("neighbour"));
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(`dateTime.test("1-30-2003 8:45")`);
console.log(dateTime.test("1-30-2003 8:45"));
console.log(`dateTime.test("January-30-2003 8:45")`);
console.log(dateTime.test("January-30-2003 8:45"));
let cartoonCrying = /boo+(hoo+)+/i;
console.log(`-----cartoonCrying.test("Boooooohoooooooohoohooooo")`);
console.log(cartoonCrying.test("Boooooohoooooooohoohooooo"));
console.log(`-----cartoonCrying.test("Booho")`);
console.log(cartoonCrying.test("Booho"));

let match = /\d+/.exec("one two 100");
console.log(`-----/\d+/.exec("one two 100")`);
console.log(/\d+/.exec("one two 100"));
console.log(`-----"one two 100".match(/\d+/)`);
console.log("one two 100".match(/\d+/));
let quotedText = /'([^']*)'/;
console.log("-----quotedText");
console.log(quotedText);
console.log(`-----quotedText.exec("she said 'hello'")`);
console.log(quotedText.exec("she said 'hello'"));
console.log(`-----/bad(ly)?/.exec("bad")`);
console.log(/bad(ly)?/.exec("bad"));
console.log(`-----/(\d)+/.exec("123")`);
console.log(/(\d)+/.exec("123"));
