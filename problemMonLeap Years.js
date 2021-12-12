function isLeapYear(x) {
  if (x % 400 === 0) return true;
  if (x % 100 === 0) return false;
  return x % 4 === 0;
}
