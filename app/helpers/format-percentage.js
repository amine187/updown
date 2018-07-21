import { helper } from '@ember/component/helper';

export function formatPercentage(params) {
  const value = parseFloat(params[0]);
  return `${value.toFixed(2)}%`;
}

export default helper(formatPercentage);
