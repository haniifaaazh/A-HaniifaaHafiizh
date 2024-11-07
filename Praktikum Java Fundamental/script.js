// Data Types: String
var Opening = "Hello, welcome to the Data Types in JavaScript!";
console.log(Opening);

// Data Types: Object
let user = {
    name: "Misora Azriella",
    age: 20,
    isMember: true
  };
  console.log("User:", user);

// Data Types: Numbers
let age = 20;
console.log("Age:", age);

// Data Types: Array
let idols = ["Jeong Jaehyun", "Haechan", "Jeon Jungkook"];
console.log("Idols:", idols);

// Data Types: Boolean
let LearningofJavaScript = true;
console.log("Learning JavaScript:", LearningofJavaScript);

// Logical Operator
let canDrive = age >= 20 && LearningofJavaScript;
console.log("Can Drive:", canDrive);

// Equality Comparison
let isEqual = (age === user.age);
console.log("Is Age Equal to User Age:", isEqual);

// Display Output on Website
document.getElementById("output").innerHTML = `
  <p><strong>Opening:</strong> ${Opening}</p>
  <p><strong>User Name:</strong> ${user.name}</p>
  <p><strong>Age:</strong> ${age}</p>
  <p><strong>Idols:</strong> ${idols.join(", ")}</p>
  <p><strong>Can Drive:</strong> ${canDrive}</p>
  <p><strong>Learning JavaScript:</strong> ${LearningofJavaScript}</p>
  <p><strong>Is Age Equal to User Age:</strong> ${isEqual}</p>
`;
