package Easy;

public class LeetCode_88 {

    public void merge(int[] nums1, int m, int[] nums2, int n) {

        int outputIndex = n + m - 1;

        int i = m - 1;
        int j = n - 1;

        while (j > -1) {
            if (i > -1 && nums1[i] > nums2[j]) {
                nums1[outputIndex] = nums1[i];
                --i;
            } else {
                nums1[outputIndex] = nums2[j];
                --j;
            }

            --outputIndex;
        }
    }
}
