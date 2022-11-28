var str = 'a.b[1].c[1]';
str = str.split('.');
var obj = {}, idx = str.length - 1;
while (idx > -1) {
  var temp = {};
  temp[str[idx]] = obj;
  obj = temp;
  idx--;
}

console.log(obj)