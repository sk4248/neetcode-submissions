class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // the sell day should have a high value then the buy day
        if(prices.length < 2) return 0;
        let cheapBuy = prices[0]
        let maxProfit = 0;
        for(let price of prices){
            if(price > cheapBuy){
                maxProfit = Math.max(maxProfit, price-cheapBuy)
            }else{
                cheapBuy = price
            }
        }
        return maxProfit;
    }
}
