import { helper } from '@ember/component/helper';

/**
 * Convert a number into a string, 
 * keeping only two decimals.
 * 
 * @function helpers/format-percentage
 * @param {Number} value
 * @returns {String}
 * @example 5.56789 => 5.57%
 */
export function formatPercentage(params) {
  const value = parseFloat(params[0]);
  return `${value.toFixed(2)}%`;
}

/**
 * Add the % symbol to the displayed number
 * and keeping only two decimals.  
 * 
 * @module helpers/format-percentage
 * @augments module:ember/component/helper
 * @public
 */
export default helper(formatPercentage);
