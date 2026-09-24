package Easy;

public class LeetCode14LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs) {

        if (strs == null || strs.length == 0) {
            return "";
        }

        int minLength = Integer.MAX_VALUE;

        for (int i = 0; i < strs.length; i++) {
            if (minLength > strs[i].length()) {
                minLength = strs[i].length();
            }
        }

        char currentChar;
        int matchIndex = 0;
        boolean commonPrefixBreak = false;

        for (int i = 0; i < minLength; i++) {
            currentChar = strs[0].charAt(i);

            for (int j = 1; j < strs.length; j++) {
                if (currentChar != strs[j].charAt(i)) {
                    commonPrefixBreak = true;
                    break;
                }
            }
            if (commonPrefixBreak) {
                break;
            }
            ++matchIndex;
        }

        return strs[0].substring(0, matchIndex);
    }
}
