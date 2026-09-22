import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class temp {
    public static void main(String[] args) {

        List<Set<Integer>> list = Arrays.asList(Set.of(1, 2, 3), Set.of(4, 5, 6));

        list.stream().flatMap(Set::stream).forEach((item) -> {
            System.out.println(item);
        });
        ;

    }
}
