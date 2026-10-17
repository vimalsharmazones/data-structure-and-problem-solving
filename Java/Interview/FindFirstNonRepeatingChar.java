package Java.Interview;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class FindFirstNonRepeatingChar {
    public static void main(String[] args) {
        String word = "swiss";

        FirstNonRepeating firstNonRepeating = new FirstNonRepeating();

        firstNonRepeating.usingLinkedHashMap(word);
        firstNonRepeating.usingHashMap(word);

    }
}

class FirstNonRepeating {

    public void usingHashMap(String str) {
        System.out.println("HashMap");
        char[] charArray = str.toCharArray();

        Map<Character, Integer> map = new HashMap<>();

        for (char ch : charArray) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (int i = 0; i < charArray.length; i++) {
            char ch = charArray[i];

            if (map.get(ch) == 1) {
                System.out.println("First Non Repeating char: " + ch);
                break;
            }
        }
    }

    public void usingLinkedHashMap(String str) {
        System.out.println("LinkedHashMap");
        char[] charArray = str.toCharArray();

        Map<Character, Integer> linkedHashMap = new LinkedHashMap<>();

        for (Character ch : charArray) {
            linkedHashMap.put(ch, linkedHashMap.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : linkedHashMap.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.println(entry.getKey());
                break;
            }
        }
    }
}