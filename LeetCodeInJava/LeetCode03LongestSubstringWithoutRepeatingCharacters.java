public class LeetCode03LongestSubstringWithoutRepeatingCharacters {
    public static void main(String[] args) {

        String s = "abcabcbb";

        int[] lastSeen = new int[128];

        int maxLength = 0;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);

            left = Math.max(left, lastSeen[currentChar]);

            maxLength = Math.max(maxLength, right - left + 1);

            lastSeen[currentChar] = right + 1;
        }
        System.out.println(maxLength);
    }
}
