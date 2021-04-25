import test from "ava";
import riff from "./cli";

test("title", (t) => {
  t.throws(
    () => {
      riff(123);
    },
    {
      instanceOf: TypeError,
      message: "Expected a string, got number",
    },
  );

  t.is(riff("unicorns"), "unicorns & rainbows");
});
