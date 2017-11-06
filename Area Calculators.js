function calculateRectangleArea(length, width) {
  if (length < 0) { return undefined }
  else { return(length * width) } }
calculateRectangleArea(20, 50)
calculateRectangleArea(1.5, 3.5)
calculateRectangleArea(-1, 0)
function calculateTriangleArea(base, height) {
  if (base < 0) { return undefined }
  else { return(base * height / 2) } }
calculateTriangleArea(20, 50)
calculateTriangleArea(30, 3.5)
calculateTriangleArea(-1, 0)
function calculateCircleArea(radius) {
  if (radius < 0) { return undefined }
  else { return(Math.PI * [radius * radius] ) } }
calculateCircleArea(20)
calculateCircleArea(1.5)
calculateCircleArea(-1)

