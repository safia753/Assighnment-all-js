




 let output = '';
    for (let i = 1; i <= 10; i++) {
      output += i + '<br>';
    }
    document.getElementById('output').innerHTML = output;



for (let i = 1; i <= 10; i++) {
  console.log(i);
}







function generateTable() {
  const number = parseInt(document.getElementById("tableNumber").value);
  const length = parseInt(document.getElementById("tableLength").value);
  const result = document.getElementById("result");

  result.innerHTML = ''; // Clear previous result

  if (isNaN(number) || isNaN(length)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  for (let i = 1; i <= length; i++) {
    result.innerHTML += `${number} × ${i} = ${number * i}\n`;
  }
}



 let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    // Get the UL element
    let list = document.getElementById("fruitList");

    // Loop through the array and display each fruit
    for (let i = 0; i < fruits.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = fruits[i];
      list.appendChild(listItem);
    }








     // a. Counting: 1 to 15
    let counting = "";
    for (let i = 1; i <= 15; i++) {
      counting += i + ", ";
    }
    document.getElementById("counting").innerText = counting.slice(0, -2);

    // b. Reverse Counting: 10 to 1
    let reverse = "";
    for (let i = 10; i >= 1; i--) {
      reverse += i + ", ";
    }
    document.getElementById("reverse").innerText = reverse.slice(0, -2);

    // c. Even: 0 to 20
    let even = "";
    for (let i = 0; i <= 20; i += 2) {
      even += i + ", ";
    }
    document.getElementById("even").innerText = even.slice(0, -2);

    // d. Odd: 1 to 19
    let odd = "";
    for (let i = 1; i < 20; i += 2) {
      odd += i + ", ";
    }
    document.getElementById("odd").innerText = odd.slice(0, -2);

    // e. Series: 2k to 20k
    let series = "";
    for (let i = 2; i <= 20; i += 2) {
      series += i + "k, ";
    }


    document.getElementById("series").innerText = series.slice(0, -2);












   let a = ["cake", "apple pie", "cookie", "chips", "patties"];

  function searchItem() {
    let userInput = document.getElementById("searchItem").value.toLowerCase();
    let result = document.getElementById("result");

    if (A.includes(userInput)) {
      result.innerHTML = `${userInput} is <strong>available</strong> at index ${A.indexOf(userInput)} in our bakery.`;
    } else {
      result.innerHTML = `We are sorry. ${userInput} is <strong>not available</strong> in our bakery.`;
    }
  }








// Take user input for first and last name
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

// Merge them into a full name
let fullName = firstName + " " + lastName;

// Greet the user using the full name
alert("Hello, " + fullName + "! Welcome!");





 function showLength() {
      const model = document.getElementById("mobileModel").value;
      const length = model.length;

      document.getElementById("result").innerHTML =
        `You entered: <b>${model}</b><br>Length of input: <b>${length}</b> characters`;
    }





    // Define the string
    var text = "Hello World";

    // Find the last index of the letter "l"
    var lastIndex = text.lastIndexOf("l");

    // Display the result in the browser
    document.getElementById("result").innerHTML = "The last index of 'l' is: " + lastIndex;












function isValidUsername(username) {
    for (let i = 0; i < username.length; i++) {
        let charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            return false;
        }
    }
    return true;
}

let username = prompt("Enter your username:");

while (!isValidUsername(username)) {
    alert("Invalid username! Please avoid using characters: @ . , !");
    username = prompt("Enter a valid username:");
}

alert("Username accepted: " + username);





 var university = "University of Karachi";
        var universityArray = university.split(""); // split into characters

        var outputDiv = document.getElementById("output");

        for (var i = 0; i < universityArray.length; i++) {
            outputDiv.innerHTML += universityArray[i] + "<br>";
        }













         // a) Take subject names
    var subject1 = prompt("Enter the name of Subject 1:");
    var subject2 = prompt("Enter the name of Subject 2:");
    var subject3 = prompt("Enter the name of Subject 3:");

    // b) Total marks for each subject
    var totalMarksPerSubject = 100;

    // c) Take obtained marks for each subject
    var marks1 = +prompt("Enter obtained marks for " + subject1);
    var marks2 = +prompt("Enter obtained marks for " + subject2);
    var marks3 = +prompt("Enter obtained marks for " + subject3);

    // d) Calculate totals
    var totalMarks = totalMarksPerSubject * 3;
    var obtainedMarks = marks1 + marks2 + marks3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    // e) Show result in table format
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table border='1' cellpadding='10'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
    document.write("<tr><th colspan='2'>Total</th><th>" + obtainedMarks + "</th></tr>");
    document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
    document.write("</table>");








    
        function generateTable() {
            var num = document.getElementById("numberInput").value;
            var resultDiv = document.getElementById("tableResult");

            // Default to 5 if input is empty
            if (num === "") {
                num = 5;
            } else {
                num = parseInt(num);
            }

            let tableHTML = "<ul>";
            for (let i = 1; i <= 10; i++) {
                tableHTML += `<li>${num} x ${i} = ${num * i}</li>`;
            }
            tableHTML += "</ul>";

            resultDiv.innerHTML = tableHTML;
          }





          // Store visitor info
  var visitorName = "John Doe";
  var productTitle = "T-shirt";
  var quantity = 5;

  // Display the message in the browser
  document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");













   