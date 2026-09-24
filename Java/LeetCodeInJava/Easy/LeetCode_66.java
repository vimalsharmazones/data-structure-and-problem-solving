package Easy;

public class LeetCode_66 {

    public static int[] plusOne(int[] digits) {

        int right = digits.length - 1;

        while (right > -1) {
            if (digits[right] < 9) {
                ++digits[right];
                return digits;
            }
            digits[right] = 0;
        }

        int[] newDigits = new int[digits.length + 1];
        newDigits[0] = 1;
        return newDigits;
    }

    public static void main(String[] args) {
        System.out.println("Hello");
        plusOne(new int[] { 9 });
    }
}
