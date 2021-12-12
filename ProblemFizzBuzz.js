const frizzBuzz = (n) => {
  for (let i = 0; i < n; i++) {
    if (n % 5 == 0 && n % 3 == 0) {
      console.log("fizzbuzz");
    } else if (n % 3 == 0) {
      console.log("fizz");
    } else if (n % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(n);
    }
  }
};
