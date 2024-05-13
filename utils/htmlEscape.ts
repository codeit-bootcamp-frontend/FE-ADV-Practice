const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const htmlUnescapes: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * 문자 "&", "<", ">", '"' 및 "'"를 해당 HTML 엔터티로 변환합니다.
 *
 * @param {string} [string=''] 변환할 문자열.
 * @returns {string} 변환된 문자열을 반환합니다.
 * @example
 *
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string: string) {
  return string && reHasUnescapedHtml.test(string)
    ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
    : string || "";
}

/**
 * 이 메서드는 `escape`의 역으로 `string`의 HTML 엔터티 `&amp;`, `<`, `&gt;`, `&quot;` 및 
 * `&#39;`를 해당 문자로 변환합니다.
 *
 * @param {string} [string=''] 변환할 문자열.
 * @returns {string} 변환된 문자열을 반환합니다.
 * @example
 *
 * unescape('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 */
function unescape(string: string) {
  return string && reHasEscapedHtml.test(string)
    ? string.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'")
    : string || "";
}

export { escape, unescape };
