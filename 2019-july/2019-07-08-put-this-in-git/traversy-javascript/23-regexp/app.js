let re;
re = /hello/;

console.log(`--------------------------------------------------------re`);
console.log(re);
console.log(`-------------------------------------re.exec("hello world")`);
console.log(re.exec("hello world"));
console.log(`----------------------------------re.exec("oh hello world")`);
console.log(re.exec("oh hello world"));
console.log(`----------------------------------re.exec("oh Hello world")`);
console.log(re.exec("oh Hello world"));
console.log(`--------------------------------------re.test("hello world")`);
console.log(re.test("hello world"));
console.log(`-----------------------------------re.test("oh hello world")`);
console.log(re.test("oh hello world"));
console.log(`-----------------------------------re.test("oh Hello world")`);
console.log(re.test("oh Hello world"));
console.log(`-----------------------------/hello/i.test("oh Hello world")`);
console.log(/hello/i.test("oh Hello world"));
console.log(`---------------/hello/g.exec("oh hello larry hello charles")`);
console.log(/hello/g.exec("oh hello larry hello charles"));
console.log(`----------------"oh hello larry hello charles".match(/hello/)`);
console.log("oh hello larry hello charles".match(/hello/));
console.log(`--------------"oh hello larry hello charles".match(/hello/));`);
console.log("oh hello larry hello charles".search(/hello/));
console.log(`--------"oh hello larry hello charles".replace(/hello/g, "hi")`);
console.log("oh hello larry hello charles".replace(/hello/, "hi"));


console.log(`---------------------------------------------------using the reTest function`);

function reTest(re, string, verbose = false) {
  if(re.test(string)) {
    console.log(`%c ${re}  ${string}`, "color: blue; font-weight: bold; font-size: 1.2em");
    if(verbose){
      console.log(string.match(re));
    }
  } else {
    console.log(`%c ${re}  ${string}`, "color: red");
  }
}
reTest(/apple/i, "Apples and more apples and oranges");
reTest(/^h/i, "Larry says hi");
reTest(/^h/i, "Harry says hi");
reTest(/otter$/i, "otter Larry");
reTest(/otter$/i, "Larry the Otter");
reTest(/h.llo/, "hallo");
reTest(/h*llo/, "hllo");
reTest(/h*llo/, "hallo");
reTest(/h*llo/, "heeeeeeello");
reTest(/gre?a?y/, "gray");
reTest(/gre?a?y/, "grey");
reTest(/gre?a?y/, "gry");
reTest(/gray\?/, "gray?");
reTest(/gr[ea]y/, "gray");
reTest(/gr[ea]y/, "grey");
reTest(/gr[ea]y/, "gry");
reTest(/t[^su]n/, "ten");
reTest(/t[^su]n/, "tun");
reTest(/t[^su]n/, "tsn");
reTest(/[A-Za-z]/, "123");
reTest(/[A-Za-z]/, "A23");
reTest(/hello/i, "hello");
reTest(/hel{2}o/i, "hello");
reTest(/hel{2}o/i, "hello");
reTest(/(iss){3}/, "Missississippi");
reTest(/Hel{2,4}o/i, "Helo");
reTest(/Hel{2,4}o/i, "Hello");
reTest(/Hel{2,4}o/i, "Helllo");
reTest(/Hel{2,4}o/i, "Hellllo");
reTest(/Hel{2,4}o/i, "Helllllo");
reTest(/Hel{2,}o/i, "Helllllllllllo");
reTest(/([0-9]x){3}/, "0x1x7x");
console.log(`--------------------------------shorthand special characters`);
reTest(/\w/,"??ab3 !", true);
reTest(/\w+/,"??ab3 !", true);
reTest(/\d/, "??ab3 !", true);
reTest(/\D/, "3??ab3 !", true);
reTest(/\s/, "3 ??ab3 !", true);
reTest(/\S/, " ??ab3 !", true);
reTest(/Hell/i, "well hello, welcome to Hell!", true);
reTest(/Hell\b/i, "well hello, welcome to Hell!", true);
console.log(`--------------------------------------------------assertions`);
reTest(/x(?=y)/i, "abcxxx", true);
reTest(/x(?=y)/i, "abcxxyx", true);
reTest(/x(?!y)/i, "abcxxyx", true);

re = /^([a-zA-Z0-9_\-\.])+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2-5}$/;

reTest(/^[a-zA-Z0-9]+/, "gailgongster@gmail.com", true);
reTest(/^[a-zA-Z0-9-]+/, "gail-gongster@gmail.com", true);
reTest(/^[a-zA-Z0-9-.]+/, "gail.gongster@gmail.com", true);
reTest(/^[a-zA-Z0-9-._]+/, "gail_gongster@gmail.com", true);
reTest(/^[a-zA-Z0-9-._]+/, "gail-gongster@gmail.com", true);
reTest(/^[a-zA-Z0-9-._]+/, "gail.gongster@gmail.com", true);
reTest(/^[a-zA-Z0-9-._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/, "gail.gongster@gmail9.com", true);


reTest(/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/, "555-555-5555");
reTest(/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/, "(555)555-5555");
reTest(/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/, "555.555.5555");































// var regex1 = RegExp('foo*','g');
// var str1 = 'table football, foosball';
// var array1;

// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
// }