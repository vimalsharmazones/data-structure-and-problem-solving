package Java.Interview;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class DiffbyCatg {

    public static void main(String[] args) {
        String[] input = {
                "fruit:banana",
                "fruit:apple",
                "veg:Tomato"
        };

        Map<String, List<String>> result = Arrays.stream(input)
                .map(s -> s.split(":"))
                .collect(Collectors.groupingBy(
                        arr -> arr[0],
                        Collectors.mapping(
                                arr -> arr[1],
                                Collectors.toList())));

        Map<String, List<String>> result2 = Arrays.stream(input)
                .map(s -> s.split(s))
                .collect(
                        Collectors.groupingBy(
                                arr -> arr[0],
                                Collectors.mapping(arr -> arr[1], Collectors.toList())));

        System.out.println(result);
    }
}
