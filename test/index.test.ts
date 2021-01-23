import { hello } from "../src/index";

test("Tests Hello World", () => {
  expect(hello("Viktor")).toBe("Hello Viktor");
  expect(hello()).toBe("Hello World");
});
