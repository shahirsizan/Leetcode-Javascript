// https://leetcode.com/problems/reverse-integer/

const reverse = (x) => {
	let isNegative = false;

	if (x < 0) {
		isNegative = true;
	}

	const absolute_value_string = Math.abs(x).toString();
	const reversed_string = absolute_value_string.split("").reverse().join(""); //join() removes preceding 0 from the number
	const reversed_number = parseInt(reversed_string);

	const result = isNegative ? -reversed_number : reversed_number;

	if (Math.abs(result) > 2 ** 31) {
		return 0;
	}

	return result;
};

console.log(reverse(-2340));
