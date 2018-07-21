import { helper } from '@ember/component/helper';

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

export default helper(formatDate);
