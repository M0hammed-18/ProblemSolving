function primes(start, end) {
    let notprime = [];
    let prime = [];
    for (let i = start + 1; i <= end; i++) {
      for (let x = 2; x < i; x++) {
        if (i % x == 0) {
          notprime.push(i);
        }
      }
      if (!notprime.includes(i)) {
        prime.push(i);
      }
    }
    if (prime.length == 0) {
      return null;
    } else {
      return prime;
    }
  }