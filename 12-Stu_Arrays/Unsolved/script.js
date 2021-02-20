// WRITE YOUR CODE HERE

var studentNames = ["John", "Emily", "Bob", "Patricia"];

console.log(studentNames.length);

var i;
for (i = 0; i < studentNames.length; i++){
    console.log("Welcome to class " + studentNames[i] + "!");
}

studentNames[0] = "Johnathan";

if (studentNames[0] != "John"){
    console.log(studentNames[0]);
}

console.log(studentNames[studentNames.length - 1]);