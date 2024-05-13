import { chunk } from "./chunk";

describe("chunk", () => {
  const array = [0, 1, 2, 3, 4, 5];

  it("should return chunked arrays", () => {
    const actual = chunk(array, 3);
    expect(actual).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  it("should return the last chunk as remaining elements", () => {
    const actual = chunk(array, 4);
    expect(actual).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });

  it("should coerce `size` to an integer", () => {
    expect(chunk(array, array.length / 4)).toEqual([
      [0],
      [1],
      [2],
      [3],
      [4],
      [5],
    ]);
  });
});
