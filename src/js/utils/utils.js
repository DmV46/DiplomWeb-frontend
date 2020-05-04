/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// print format Date to "2  августа, 2019 "
export function getFormatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(Date.parse(dateString)).toLocaleString('ru', options).slice(0, -3).split('');
  date.splice(-5, 0, ',');
  return date.join('');
}

// print format Date to " 2020-04-28 "
export function getIsoDate(timeStap = 0) {
  const date = new Date(Date.now() + Number(timeStap)).toISOString().slice(0, 10);
  return date;
}

function upperFirstSimbol(string) {
  const newString = string.split('');
  newString[0] = newString[0].toUpperCase();
  return newString.join('');
}

export function sortNews(array) {
  const newObj = array.reduce((item, index) => {
    item[index] = (item[index] || 0) + 1;
    return item;
  }, {});

  const sortable = [];
  for (const item in newObj) {
    sortable.push([upperFirstSimbol(item), newObj[item]]);
  }

  return sortable.sort((a, b) => b[1] - a[1]);
}
