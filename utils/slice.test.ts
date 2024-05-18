import slice from "./slice";

describe("slice", () => {
  const array = [1, 2, 3];

  it("should use a default `start` of `0` and a default `end` of `length`", () => {
    const actual = slice(array);
    expect(actual).toEqual(array);
    expect(actual).not.toBe(array);
  });

  it("should work with a positive `start`", () => {
    expect(slice(array, 1)).toEqual([2, 3]);
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  it.each([3, 4, 2 ** 32, Infinity])(
    "should work with a `start` >= `length`",
    (start) => {
      expect(slice(array, start)).toEqual([]);
    }
  );

  it("should work with a negative `start`", () => {
    expect(slice(array, -1)).toEqual([3]);
  });

  it.each([-3, -4, -Infinity])(
    "should work with a negative `start` <= negative `length`",
    (start) => {
      expect(slice(array, start)).toEqual(array);
    }
  );

  it.each([2, 3])("should work with `start` >= `end`", (start) => {
    expect(slice(array, start, 2)).toEqual([]);
  });

  it("should work with a positive `end`", () => {
    expect(slice(array, 0, 1)).toEqual([1]);
  });

  it.each([3, 4, 2 ** 32, Infinity])(
    "should work with a `end` >= `length`",
    (end) => {
      expect(slice(array, 0, end)).toEqual(array);
    }
  );

  it("should work with a negative `end`", () => {
    expect(slice(array, 0, -1)).toEqual([1, 2]);
  });

  it.each([-3, -4, -Infinity])(
    "should work with a negative `end` <= negative `length`",
    (end) => {
      expect(slice(array, 0, end)).toEqual([]);
    }
  );
});
