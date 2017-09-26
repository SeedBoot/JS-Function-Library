var html = document.querySelector('html');
var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

// number function array
var funcLib = [

  // function to find squared number
  function squared(num) {
    return "Squared is: " + num * num;
  },

  // function to find square root of number
  function squareRoot(num) {
    return "Square root is: " + Math.sqrt(num);
  },

  // function to find cubed number
  function cubed(num) {
    return "Cubed is: " + num * num * num;
  },

  // function to find cube root of number
  function cubeRoot(num) {
    return "Cube root is: " + Math.cbrt(num);
  },

  // function to find factorial-eded number
  function factorial(num) {
    for (var x = num; x > 1; x--) {
      num *= x-1;
    }
    return "Factorial is: " + num;
  },

  // function to find circumference of circle
  function circumference(num) {
    var circum = 2 * Math.PI * num;
    return "Circumference of circle with a radius of " + num + " is: " + circum;
  },

  // function to display Fibonacci sequence
  function fibSeq(num) {
    // deals with low numbers
    if (num == 0 || num == 1) {
      return num + " in the Fibonacci sequence is... you guessed it: " + num;
    }
    else { //builds array, then
      var fibArr = [1, 1];
      for (var i = 2; i < num; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
      }
      var fibString = fibArr.toString().split(',').join(', ');
      return "Up to " + num + " in the Fibonacci sequence is: " + fibString;
    }
  },

  // function to find Fibonacci number
  function fibonacci(num) {
    if (num == 0 || num == 1) {
      return "";
    } else if (num == 2) {
      return "Number " + num + " in the Fibonacci sequence is: 1";
    }
    else { 
      var fibArr = [1, 1];
      for (var i = 2; i < num; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
      }
      var result = fibArr[i - 2] + fibArr[i - 3];
      return "Number " + num + " in the Fibonacci sequence is: " + result;
    }
  }

]

//listener for input bar
input.onchange = function() {
  var num = input.value;

  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    // create div
    var panel = document.createElement('div');
    panel.setAttribute('class', 'mathBox');
    html.appendChild(panel);

    //create h1 of number
    var h1 = document.createElement('h1');
    h1.textContent = num;
    panel.appendChild(h1)

    // for loop to add each sum to the 'panel' node
    for (var i = 0; i < funcLib.length; i++) {
      // create text in <p> in panel
      var msg = document.createElement('p');
      msg.textContent = funcLib[i](num);
      panel.appendChild(msg);
    }

    // create close "X" button
    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    // Listener on close button to
    // delete 'panel' node
    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
      input.value = '';
      input.focus();
    }
  }
}

/* **     **  *******  *****    ****** *\
   ***   ***  **   **  **  **   **
   ** * * **  **   **  ****     *****
   **  *  **  **   **  **  **   **   
\* **     **  *******  **   **  ****** */

/* *********     **       ******  *********  **   ** *\
      ***       * **     ***         ***      ** **  
      ***      *   **     *****      ***       ***   
      ***     * * * **       ***     ***       ***   
\*    ***    *       **  ******      ***       ***   */

/* ******  **   **  ***   **  ******  ********  **  *******  ***   **   ****** *\
   **      **   **  ****  **  **         **     **  **   **  ****  **  ***     
   *****   **   **  ** ** **  **         **     **  **   **  ** ** **   ***** 
   **      **   **  **  ****  **         **     **  **   **  **  ****      ***
\* **      *******  **   ***  ******     **     **  *******  **   ***  ******  */

function sumOfArray(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
