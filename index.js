function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function isPalindrome(word) {
  const wordLower = word.toLowerCase();
  let left = 0;
  let right = wordLower.length - 1;

  while (left < right) {
    if (wordLower[left] !== wordLower[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountedPrice = originalPrice * (discountPercentage / 100);
  const finalPrice = originalPrice - discountedPrice;
  return finalPrice;
}
// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
