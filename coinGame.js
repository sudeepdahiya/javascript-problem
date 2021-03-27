const arr = [1, 2, 3]
const getCoins = (arr, m, n) => {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  if (m <= 0 && n >= 1) {
    return 0;
  }
  return getCoins(arr, m - 1, n) + getCoins(arr, m, n - arr[m - 1])
}

