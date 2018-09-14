var sides = [lengthA, lengthB, lengthC];
var lengthA = sides[0]
var lengthB = sides[1]
var lengthC = sides[2]
var triangle = function(lengthA, lengthB, lengthC){

  if (isNaN(lengthA) || isNaN(lengthB) || isNaN(lengthC)) {
    alert("All sides MUST be numerical.");
  } else if (lengthA >= (lengthB + lengthC) || lengthB >= (lengthC + lengthA) || lengthC >= (lengthA + lengthB)) {
    alert("This is not a valid triangle!");
  } else if (lengthA===lengthB && lengthB===lengthC) {
    return "This is an Equilateral triangle";
  } else if (lengthA===lengthB || lengthB===lengthC || lengthC===lengthB) {
    return "This is an Isosceles trisngle.";
  } else if (lengthA!=lengthB && lengthA!=lengthC) {
    return "This is a Scalene triangle.";
  } else {
    return sides;
  }
};
