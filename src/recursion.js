// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
  
    if(!n) {
        return 1 ;
   } 
   else if ( n < 0 ){
     
     return null;
   }
   
   
   else {
        return n * factorial(n - 1);
    }
};
 

  

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

  
  var sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}

  
 
  


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
  
   return (array.length === 0 ) ? 0 : arraySum(array);
  
  
  
  
  
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  
    if(n===0){
        return true;
    }else if ( n == 1 || n == -1){
        return false;
    }else {
        
        if  (n < 0 ){
          
          return(isEven(n+2))
        }
        
        
        return(isEven(n - 2));
 }
    
   
};






// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
     if(n === 0){
    return 0;
} else{
 return (n > 0) ? (n - 1) + sumBelow(n - 1): (n + 1) + sumBelow(n + 1);
}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
//var range = function(x, y) 

// var range = function(x, y) 
// {
//   if (y - x === 2) 
//   {
//     return [x + 1];
//   } 
//   else 
//   {
//     var list = range(x, y - 1);
//     list.push(x - 1);
//     return list;
//   }
// };

var range = function(x,y) {

if (y - x === 1 || y -x === 0){
 
  return[];

}else
y = y > x ? y - 1: y+ 1;

return y === x ? []: range(x,y).concat(y)
};




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) { 
    return 1;
    } else if (exp < 0) {
    return 1 / (exponent(base, -1 * exp));
    } else
    return base * exponent(base, exp - 1);
  
  
  
//   if(exp === 0) {
//         return 1;
   
//   }
//   else if (exp < 0 ){
     
     
//      return (1 / base) * exponent(base,exp +1);
     
//   }
   
   
   
   
//   else {
//         return base * exponent(base,exp-1);
//     }
 

  
};








// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  
  if (n === 1){
    
    return true;
  
  }
   else if ( n > 1)  {
  
    
   return  powerOfTwo(n/2);
    
    
   }
   else {
  
return false;
   }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  
  
  
  if (string === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return reverse(string.substr(1)) + string.charAt(0);

  
  
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    
      var x = string.toLowerCase().split(' ').join('');
  if (x === '' || x.length === 1) { return true; } 
  if (x[0] !== x.slice(-1)) { return false; }
  return palindrome(x.substr(1, x.length - 2));
    
  
    // var strLen = string.length;
    // if (strLen === 0 || strLen === 1) {
    //     return true;
    // }
    
    // if (string[0] === string[strLen - 1]) {
    //     return palindrome( string.slice(1, strLen - 1) );
    // }
    
    // return false;
};

  


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
   if (  x < y){
     
     return x;
   }
   else {
     
    return modulo(x-y,y);///3///1;
     
     
   }
   
   
  
  
  
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  
 if ( x === 0){
   
   return 0; 
   
   
 }else{
   
   if ( x  < 0 ){
     
     return -y + multiply(x+1,y);
   }
   
   
   return y + multiply(x-1,y);
   
 }
  
  
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  
    var strlen = str1.length;
    var strlen2 =str2.length;
    
     //if(strlen != strlen2 ){
         
      //  return false;
   //  }
     
    if (strlen === 0 && strlen2 == 0) {
        
        return true;
    }
    
    if (str1[0] === str2[0]) {
        return compareStr( str1.substring(1), str2.substring(1));
    }
    
    return false;
};

  
  
   
//   var n = strl. 
    


// if (str1.substring( n ,n) == str2.substring(n,n)){

//  n--
// return compareStr(str1,str2 )
// } else 



    
    
    


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    
   if (str.length === 1) {
  return [str.slice(0)];
} else return [str.charAt(0)].concat(createArray(str.slice(1)));
  
  
    //if (result.leght == str.)
    
//     var result =  str.split("");
    
    
    
// return result;
    
    
};

// 17. Reverse the order of an array

var reverseArr = function (array) {
  if (!array.length) {
    return array;
  } else return reverseArr(array.slice(1)).concat(array[0]);
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    
     return length === 0 ? [] : [value].concat(buildList(value,length - 1))
    
   
    
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    
    
      // base case
  if (array.length === 0) { return 0; } 

  // recursive case
  var increment = array[0] === value ? 1 : 0;
  return increment + countOccurrence(array.slice(1), value);
    
    
    
    
    
    
    
    
    
    
    
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = function(array, callback) {
  if(array.length === 1) { 
    return callback(array); 
  }
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};
console.log(rMap([1,2,3], function(times){
    return times * 2;
}));




// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    
    if(n === 0 ){return n }
    if(n < 0){return null}
    if(n === 1 ){return n}
    
  
    
   return  nthFibo(n-1) + nthFibo(n-2);
    
    
    
    
    
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 

var capitalizeWords = function(array) {
    
  let arrt =[]; 
    
    
     if (array === undefined || array.length === 0 ){ return arrt; }
     
     else{
    
    
    arrt.push(array[0].toUpperCase());
    
    
    return arrt.concat(capitalizeWords(array.slice(1)));
     }
     
  
  
   
};
    
    
    
    
    

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
 
 var arrt =[];

var capitalizeFirst = function(array) {
    
    
   let arrt =[]; 
    
    
     if (array === undefined || array.length === 0 ){ return arrt; }
     
     else{
    
    
    arrt.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    
    
    return arrt.concat(capitalizeFirst(array.slice(1)));
     }
     
    
    
    
    
    //  if (array === undefined || array.length === 0 ){ return  }
     
    //  else{
    
    
    // arrt.push(array[0].charAt(0).toUpperCase() + array[0].substring(1));
    // /// move to each index in the array
    
    // capitalizeFirst(array.slice[1]);
    //  }
     
    // return arrt;
   
};
    
    
    
    

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}


var letterTally = function(str, obj) {
    let result = Array.from(arguments)[1] || {};
    if(str.length === 0) {
        return result;
    }
    if(!result[str[0]]) {
        result[str[0]] = 1;
    } else
     {
        console.log(result[str[0]], 'hey');
        result[str[0]]++;
    }
    return letterTally(str.slice(1), result);
};

// var letterTally = function(str, obj) {
  
//   if (obj === undefined){ obj = {}}
//   if(str.length === 0 ){
      
//       return;
//   }
     
     
//     if (obj.hasOwnProperty(str.charAt[0])){
        
    
//       obj[str.charAt(0)] = obj[str.charAt(0)] + 1;
        
//     }
//     else { 
        
//       obj[str.charAt(0)] = 1;
        
        
   
        
//     }
    

//     letterTally(str.substring(1),obj);

    
//     return obj;
    
    
    
    
    
// };

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    
   
    if (list.length === 0) return [];
    let [head, ...rest] = list;
    let l = compress(rest);
    if (l[0] === head) {
        return l;
      } else return [head, ...l];
    
    
    
    
    
    
    
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array) {
    if (array.length === 0) { return array };
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } else {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};





// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    
     if (array.length === 0) { return array; }
    if(array[0] < 0) { array[0] = -array[0]; }
    if(array[1] > 0) { array[1] = -array[1]; }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
    
    
    
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
    

     


      if (str.length  === 0){
          
          return str;
      }
       
       
       
   if (str.charAt(0) === "1"){
       
       str  =  "one" + str.slice(1);
       
       
   }
   else if(str.charAt(0) === "2" ) {
       
       str = "two" + str.slice(1);
       
   }
   else if ( str.charAt(0) === "3"){
       
       str = "three" +str.slice(1);
       
   }
   
  else if (str.charAt(0) === "4"){
      
      str = "four" + str.slice(1);
      
  }
  else if (str.charAt(0) === "5"){
      
      
      str = "five" + str.slice(1);
      
  }
  else if (str.charAt(0) ==="6"){

    
     str = "six" + str.slice(1);
  }
  else if (str.charAt(0) === "7"){
      
      str = "seven" + str.slice(1);
      
  }
  
  else if (str.charAt(0) === "8"){
      
      str = "eight" + str.slice(1);
      
      
  }
  else if (str.charAt(0) === "9"){
      
       str = "nine" + str.slice(1);
      
      
  }
  else if (str.charAt(0) === "10"){
      
      str = "ten" + str.slice(1);
      

  } 
     
    return str[0] + numToText(str.slice(1)); 
     
    
  
  
    
};

    

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
