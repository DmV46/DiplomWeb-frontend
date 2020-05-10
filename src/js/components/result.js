import '../../blocks/result/result.css';
import Result from '../classes/Result/Result';

const result = new Result('.main');

result.createComponent(
  'section',
  ['result', 'result_founded', 'result_unvisible'],
);

export default result;
