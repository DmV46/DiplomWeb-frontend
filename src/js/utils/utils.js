// format Date to 2 августа 2019 г.
export default function getFormatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(Date.parse(dateString)).toLocaleString('ru', options).slice(0, -3).split('');
  date.splice(-5, 0, ',');
  return date.join('');
}
