import { formatCurrency } from '../../scripts/utils/money.js';

console.log('Test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0')

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cents');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('also rounds up to the nearest cents but result must be failed for it to be regarded as passed');


if (formatCurrency(2000.4) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}