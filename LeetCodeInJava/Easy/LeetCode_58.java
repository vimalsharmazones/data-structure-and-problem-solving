package Easy;

public class LeetCode_58 {
    public int lengthOfLastWord(String s) {
        int right = s.length() - 1;

        int lastWordRightIndex;

        while (right > -1 && s.charAt(right) == ' ') {
            right--;
        }
        lastWordRightIndex = right;

        while (right > -1 && s.charAt(right) != ' ') {
            --right;
        }

        return lastWordRightIndex - right;
    }
}
