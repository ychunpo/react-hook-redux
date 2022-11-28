export function slowFunction(number) {
  //console.log('Calling slow Function');
  for (let i = 0; i <= 99999; i++) { }
  return number * 2;
}