package Easy;

public class LeetCode_67 {

    public String addBinary(String a, String b) {
        StringBuilder sb = new StringBuilder();
        int indexA = a.length() - 1;
        int indexB = b.length() - 1;
        int carry = 0;
        int sum;
        while (indexA > -1 || indexB > -1 || carry != 0) {
            sum = carry;
            if (indexA > -1) {
                sum += a.charAt(indexA) - '0';
                --indexA;
            }

            if (indexB > -1) {
                sum += b.charAt(indexB) - '0';
                --indexB;
            }

            sb.append(sum % 2);
            carry = sum > 1 ? 1 : 0;
        }

        return sb.reverse().toString();
    }
}
