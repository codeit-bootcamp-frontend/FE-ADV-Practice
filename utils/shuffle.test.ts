import shuffle from "./shuffle";

describe("shuffle", () => {
  const array = [1, 2, 3];

  it("should return a new array", () => {
    expect(shuffle(array)).not.toBe(array);
  });

  it("should contain the same elements after a collection is shuffled", () => {
    expect(shuffle(array).sort()).toEqual(array);
  });
});
