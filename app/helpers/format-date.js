import { helper } from '@ember/component/helper';

/**
 * Change the format of date
 * 
 * @function helpers/format-date
 * @param {String} date
 * @returns {String}
 */
export function formatDate(params) {
  let result = null;
  const param = params[0];

  if (param) {
    const date = new Date(param);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    result = `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  return result;
}

/**
 * Transform date in a pleasant
 * date time format 
 * 
 * @module helpers/format-date
 * @augments module:ember/component/helper
 * @public
 */
export default helper(formatDate);
