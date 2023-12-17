const hi = require("./test");
test("Wait for Hi message", () => {
  expect(hi()).toBe("Hi");
});
