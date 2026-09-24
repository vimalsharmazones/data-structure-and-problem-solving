package Easy;

public class LeetCode28 {
    public static int strStr(String haystack, String needle) {

        if (haystack.length() < needle.length()) {
            return -1;
        }

        int index = -1;

        boolean found;

        int maxItrationLength = haystack.length() - needle.length();

        for (int i = 0; i < maxItrationLength; i++) {
            found = true;
            for (int j = 0; j < needle.length(); j++) {
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    found = false;
                    break;
                }

                if (found) {
                    return i;
                }
            }
        }

        return index;
    }

    public static void main(String[] args) {

    }
}
