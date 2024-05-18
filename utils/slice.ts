/**
 * 'start'부터 'end'까지(포함하지 않음) 배열 조각을 만듭니다.
 *
 * @param {Array} array 조각을 만들 배열
 * @param {number} [start=0] 시작 위치. 음수 인덱스는 끝에서부터의 오프셋으로 처리됩니다.
 * @param {number} [end=array.length] 끝 위치. 음수 인덱스는 끝에서부터의 오프셋으로 처리됩니다.
 * @returns {Array} 배열 조각
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */

function slice(array: any[], start?: number, end?: number) {
  let length = array.length;
  if (!length) {
    return [];
  }
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

export default slice;
