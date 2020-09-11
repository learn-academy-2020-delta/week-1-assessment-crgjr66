// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes
// two numbers as arguments and returns the sum.
describe("addThemUp", () => {
  test("take 2 numbers and return the sum", () => {
    expect(addThemUp(2, 3)).toEqual(5)
    expect(addThemUp(2, 10)).toEqual(12)
    expect(addThemUp(-2, 2)).toEqual(0)
  })
})

const addThemUp = (num1, num2) => {
  //return num1 - num2;
  return num1 + num2;
}



// --------------------1b) See the test fail. THEN write the code to make the test pass.
describe("addThemUp2", () => {
  test("take 2 numbers and return the sum", () => {
    expect(addThemUp(2, 3)).toEqual(5)
    expect(addThemUp(2, 10)).toEqual(12)
    //expect(addThemUp(-2, "dog")).toEqual(0)
    expect(addThemUp(-2, 200)).toEqual(198)
  })
})

const addThemUp2 = (num1, num2) => {
  return num1 + num2;
}




// --------------------2a) Create a test for a function called triangleArea that takes
// the base and the height of a triange and returns the area. The area of a triange is
// the base times the height divided by two.
describe("triangleArea", () => {
  test("take base and height of triangle and return the area", () => {
    expect(triangleArea(2, 3)).toEqual(3)
    expect(triangleArea(2, 10)).toEqual(10)
  })
})

const triangleArea = (base, height) => {
  return base * height / 2;
}


// --------------------2b) See the test fail. THEN write the code to make the test pass.
describe("triangleArea2", () => {
  test("take base and height of triangle and return the area", () => {
    expect(triangleArea(2, 3)).toEqual(3)
    expect(triangleArea(2, 10)).toEqual(10)
    //expect(triangleArea(2, "dog")).toEqual(10)
    expect(triangleArea(4, 10)).toEqual(20)
  })
})

const triangleArea2 = (base, height) => {
  //return base / height * 2;
  return base * height / 2;
}
