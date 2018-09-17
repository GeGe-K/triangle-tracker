// var sides = [document.getElementById("lengthA").value, document.getElementById("lengthB").value, document.getElementById("lengthC").value];
// var lengthA = sides[0]
// var lengthB = sides[1]
// var lengthC = sides[2]
var triangle = function(){
  var sides = [document.getElementById("lengthA").value, document.getElementById("lengthB").value, document.getElementById("lengthC").value];
  var lengthA = parseFloat(sides[0]);
  var lengthB = parseFloat(sides[1]);
  var lengthC = parseFloat(sides[2]);
  console.log(typeof (lengthA))
  console.log(lengthB)
  console.log(lengthC)
  // if (isNaN(lengthA) || isNaN(lengthB) || isNaN(lengthC)) {
  //   alert("All sides MUST be numerical.");

  if (lengthA===lengthB && lengthB===lengthC) {
    // return "This is an Equilateral triangle";
          document.getElementById('text_where').innerHTML = "This is an Equilateral triangle";
  } else if (lengthA > (lengthB + lengthC) || lengthB > (lengthC + lengthA) || lengthC > (lengthA + lengthB)) {
   alert("This is not a valid triangle!");
 } else if (lengthA===lengthB || lengthB===lengthC || lengthC===lengthB) {
    // return "This is an Isosceles trisngle.";
      document.getElementById('text_where').innerHTML = "This is an Isosceles trisngle.";
  } else if (lengthA!=lengthB && lengthA!=lengthC && lengthB!=lengthC) {
    // return "This is a Scalene triangle.";
    document.getElementById('text_where').innerHTML = "This is a Scalene triangle.";

  } else {
    // return sides;
    document.getElementById('text_where').innerHTML = sides


  }
};
