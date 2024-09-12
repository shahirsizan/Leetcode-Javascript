// https://leetcode.com/problems/number-of-islands/description/

const numIslands = (grid) => {
	let count = 0;
	for (let row in grid) {
		for (let col in grid[row]) {
			if (grid[row][col] === "1") {
				count += 1;
				makeAdjacentRowAndColsValuesToZero(
					parseInt(row),
					parseInt(col),
					grid
				);
			}
		}
	}
	return count;
};

const makeAdjacentRowAndColsValuesToZero = (row, col, grid) => {
	if (
		grid[row] === undefined ||
		grid[row][col] === undefined ||
		grid[row][col] == "0"
	) {
		return;
	}

	grid[row][col] = "0";
	makeAdjacentRowAndColsValuesToZero(row + 1, col, grid);
	makeAdjacentRowAndColsValuesToZero(row - 1, col, grid);
	makeAdjacentRowAndColsValuesToZero(row, col + 1, grid);
	makeAdjacentRowAndColsValuesToZero(row, col - 1, grid);
};

console.log(
	numIslands([
		["1", "1", "0", "0", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "1", "0", "0"],
		["0", "0", "0", "1", "1"],
	])
);
