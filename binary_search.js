function sumtest(arr, num){
  for(let i=0; i<arr.length; i++){
    // if(arr[i] * 2 === num) continue;
    if(search(num-arr[i], arr) === true) return true;
  }
  return false;
}

function search(num, arr){
  let halfLength = Math.floor(arr.length/2);

  if(num < arr[halfLength]){
    return search(num, arr.slice(0, halfLength))
  }
  else if(num > arr[halfLength]){
    return search(num, arr.slice(halfLength + 1));
  }
  else if(num === arr[halfLength]) return true;
  else return false;
}

// let arr = [1, 3, 5, 7, 9], num = 14;
// console.log(sumtest(arr, num));
