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
