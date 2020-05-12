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

export function toUpperFirstSimbol(string) {
  const newString = string.split('');
  newString[0] = newString[0].toUpperCase();
  for (let i = 1; i < newString.length; i++) {
    newString[i] = newString[i].toLowerCase();
  }
  return newString.join('');
}

export function sortNews(array) {
  const newObj = array.reduce((item, index) => {
    item[index] = (item[index] || 0) + 1;
    return item;
  }, {});

  const sortable = [];
  for (const item in newObj) {
    sortable.push([item, newObj[item]]);
  }

  return sortable.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
}
