// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        int high, low;
		high = n;
		low = 1;

		while(low <= high){
			int medium = low + (high-low)/2;//不知道为什么用（low+high）/2会超时？？？
			int g = guess(medium);
			if(g == 1){
				low = medium+1;
			}else if(g == -1){
				high = medium-1;
			}else{
				return medium;
			}
		}
		return low;	
    }
};