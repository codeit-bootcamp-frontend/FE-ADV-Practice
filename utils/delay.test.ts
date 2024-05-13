import delay from "./delay";

describe("delay", () => {
  it("should delay `func` execution", (done) => {
    let pass = false;
    delay(() => {
      pass = true;
    }, 32);

    setTimeout(() => {
      expect(pass).toBe(false);
    }, 1);

    setTimeout(() => {
      expect(pass);
      done();
    }, 64);
  });

  it("should use a default `wait` of `0`", (done) => {
    let pass = false;
    delay(() => {
      pass = true;
    });

    expect(pass).toBe(false);

    setTimeout(() => {
      expect(pass);
      done();
    }, 0);
  });

  it("should be cancelable", (done) => {
    let pass = true;
    const timerId = delay(() => {
      pass = false;
    }, 32);

    clearTimeout(timerId);

    setTimeout(() => {
      expect(pass);
      done();
    }, 64);
  });

  it("should provide additional arguments to `func`", (done) => {
    const mockFn = jest.fn();

    delay(mockFn, 32, 1, 2);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledWith(1, 2);
      done();
    }, 64);
  });
});
