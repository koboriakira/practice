import java.util.Arrays;
import java.util.List;

import com.google.common.collect.Lists.*;

/**
 * Main
 */
public class Main {

  public static void main(String[] args) {
    System.out.println("あああ");
    hello();
    List<List<String>> result = Lists.partition(Arrays.asList("aaa", "bbb", "ccc"));
  }

  private static void hello() {
    System.out.println("Hello, World");
  }
}
