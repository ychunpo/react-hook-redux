const obj = { kids: { eyal: 21, noam: 15 }, pets: { dog: 5, cat: 2 } };
const targetLocation = "kids.eyal";
const pathArray = targetLocation.split('.');
console.log('pathArray: ', pathArray)
const lastNode = pathArray[pathArray.length - 1];
let node = obj;
pathArray.forEach((path, index) => node = index === pathArray.length - 1 ? node : node[path]);
node[lastNode] = 22;
console.log(obj);