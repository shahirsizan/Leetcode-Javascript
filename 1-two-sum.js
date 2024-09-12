// https://leetcode.com/problems/two-sum/description/

const twoSum = (numbers_array, target_value) => {
	let hashMap = {};

	for (let i = 0; i < numbers_array.length; i++) {
		let num = numbers_array[i];
		let remaining_Value = target_value - num;
		if (remaining_Value in hashMap) {
			return [hashMap[remaining_Value], i];
		} else {
			hashMap[num] = i;
		}
	}
	return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
