import { escape, unescape } from "./htmlEscape";

describe("escape", () => {
  let escaped = "&amp;&lt;&gt;&quot;&#39;/";
  let unescaped = "&<>\"'/";

  escaped += escaped;
  unescaped += unescaped;

  it("should escape values", () => {
    expect(escape(unescaped)).toBe(escaped);
  });

  it("should handle strings with nothing to escape", () => {
    expect(escape("abc")).toBe("abc");
  });

  it("should escape the same characters unescaped by `_.unescape`", () => {
    expect(escape(unescape(escaped))).toBe(escaped);
  });

  ["`", "/"].forEach((chr) => {
    it(`should not escape the "${chr}" character`, () => {
      expect(escape(chr)).toBe(chr);
    });
  });
});

describe("unescape", () => {
  let escaped = "&amp;&lt;&gt;&quot;&#39;/";
  let unescaped = "&<>\"'/";

  escaped += escaped;
  unescaped += unescaped;

  it("should unescape entities in order", () => {
    expect(unescape("&amp;lt;")).toBe("&lt;");
  });

  it("should unescape the proper entities", () => {
    expect(unescape(escaped)).toBe(unescaped);
  });

  it("should handle strings with nothing to unescape", () => {
    expect(unescape("abc")).toBe("abc");
  });

  it("should unescape the same characters escaped by `_.escape`", () => {
    expect(unescape(escape(unescaped))).toBe(unescaped);
  });

  it("should handle leading zeros in html entities", () => {
    expect(unescape("&#39;")).toBe("'");
    expect(unescape("&#039;")).toBe("'");
    expect(unescape("&#000039;")).toBe("'");
  });

  ["&#96;", "&#x2F;"].forEach((entity) => {
    it(`should not unescape the "${entity}" entity`, () => {
      expect(unescape(entity)).toBe(entity);
    });
  });
});
