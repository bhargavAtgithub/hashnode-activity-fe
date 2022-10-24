/**
 * Space Generator
 * - If the spacer has children, it will contain the children and attach margins to it.
 * - If the spacer doesn't have any children,
 *    - it will take the space provided
 * @param {*} param0
 * @param {number} device
 * @returns
 */

const getMargins = ({ xy, x, y, t, r, b, l }, device) => {
  let margins = { t: 0, r: 0, b: 0, l: 0 };

  if (
    typeof xy === 'undefined' &&
    typeof x === 'undefined' &&
    typeof y === 'undefined' &&
    typeof t === 'undefined' &&
    typeof r === 'undefined' &&
    typeof b === 'undefined' &&
    typeof l === 'undefined'
  ) {
    margins = { t: 1, r: 1, b: 1, l: 1 };
  }

  if (typeof xy === 'object' && xy !== null) {
    margins['t'] = xy[device] ? xy[device] : xy[0];
    margins['r'] = xy[device] ? xy[device] : xy[0];
    margins['b'] = xy[device] ? xy[device] : xy[0];
    margins['l'] = xy[device] ? xy[device] : xy[0];
  }
  if (typeof x === 'object' && x !== null) {
    margins['r'] = x[device] ? x[device] : x[0];
    margins['l'] = x[device] ? x[device] : x[0];
  }
  if (typeof y === 'object' && y !== null) {
    margins['t'] = y[device] ? y[device] : y[0];
    margins['b'] = y[device] ? y[device] : y[0];
  }
  if (typeof t === 'object' && t !== null)
    margins['t'] = t[device] ? t[device] : t[0];
  if (typeof r === 'object' && r !== null)
    margins['r'] = r[device] ? r[device] : r[0];
  if (typeof b === 'object' && b !== null)
    margins['b'] = b[device] ? b[device] : b[0];
  if (typeof l === 'object' && l !== null)
    margins['l'] = l[device] ? l[device] : l[0];

  return `${margins.t}rem ${margins.r}rem ${margins.b}rem ${margins.l}rem`;
};

export default getMargins;
