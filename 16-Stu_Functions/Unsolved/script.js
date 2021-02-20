// Write Your Code Below

var x;
var y;

function checkEqual(x,y){
    if(x === y){
        console.log("They are equal in type and value.");
    } else if (x == y){
        console.log("They are equal in value");
    } else {
        console.log("The values are not equal");
    }
}

checkEqual(1,1);
checkEqual("1",1);
checkEqual(1,2);