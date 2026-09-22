import java.util.ArrayDeque;
import java.util.Deque;

public class LeetCode20ValidParentheses {

    public boolean isValid(String s) {
        if (s.length() % 2 != 0) {
            return false;
        }

        Deque<Character> stack = new ArrayDeque<>();

        for (char c : s.toCharArray()) {
            switch (c) {
                case '(' -> stack.push(')');
                case '{' -> stack.push('}');
                case '[' -> stack.push(']');
                default -> {
                    if (stack.isEmpty() || stack.pop() != c) {
                        return false;
                    }
                }
            }
        }

        return stack.isEmpty();
    }

}
