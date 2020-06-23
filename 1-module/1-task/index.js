/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
	result = 1;
	for (let i = 1; i < n + 1; i++) {
		result *= i;
	}
	return result;
}

