// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

class Solution {
	maxProfit(pricesList) {
		let buyPrice = pricesList[0];
		let profit = 0;
		for (let i = 1; i < pricesList.length; i++) {
			if (pricesList[i] < buyPrice) {
				// loss
				buyPrice = pricesList[i];
			} else if (pricesList[i] - buyPrice > profit) {
				// profit
				profit = pricesList[i] - buyPrice;
			}
		}
		return profit;
	}
}

const sol = new Solution();
const prof = sol.maxProfit([7, 1, 5, 3, 6, 40]);
console.log(prof);
