import Result from '../classes/Result/Result';

const resultSaved = new Result('.main');

resultSaved.createComponent(
  'section',
  ['result', 'result_saved', 'result_unvisible'],
  `
  <div class="result__container result__container_position_small">
  </div>
  `,
);

export default resultSaved;
