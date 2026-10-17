package Java.Interview;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FindAllVowelsFromList {
    public static void main(String[] args) {
        List<String> words = List.of(
                "apple",
                "banana",
                "orange",
                "grape",
                "education",
                "computer",
                "umbrella",
                "sky",
                "elephant",
                "india");

        Map<Character, Integer> vowelCountsMap = new HashMap<>(Map.of('a', 0, 'e', 0, 'i', 0, 'o', 0, 'u', 0));

        for (String str : words) {
            for (Character ch : str.toCharArray()) {
                if (vowelCountsMap.containsKey(ch)) {
                    vowelCountsMap.put(ch, vowelCountsMap.get(ch) + 1);
                }

            }
        }

        System.out.println(vowelCountsMap);

        // Second Approach

        Map<Character, Integer> vowelCountsMap2 = new HashMap<>();
        String vowels = "aeiou";
        for (String str : words) {
            for (int i = 0; i < str.length(); i++) {
                char ch = str.charAt(i);

                if (vowels.contains(String.valueOf(ch))) {
                    vowelCountsMap2.put(ch, vowelCountsMap2.getOrDefault(ch, 0) + 1);
                }

            }
        }

        System.out.println(vowelCountsMap2);

        // Stream Approach

        Map<Character, Long> outputMap = words.stream().flatMap(str -> str.chars().mapToObj(ch -> (char) ch))
                .filter(ch -> "aeiou".indexOf(ch) > -1)
                .collect(Collectors.groupingBy(ch -> ch,
                        Collectors.counting()));

        System.out.println(outputMap);

    }

}
