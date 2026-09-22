package Easy;

public class LeetCode09PalindromeNumber {
    public boolean isPalindrome(int x) {

        // Negative numbers are not palindromes due to the '-' sign.
        // If Last digit is 0, that it should be first digit also.

        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int reversed = 0;
        int orginalX = x;

        while (x > 0) {
            int remainder = x % 10;
            reversed = (reversed * 10) + remainder;
            x /= 10;
        }

        return reversed == orginalX;
    }
}
