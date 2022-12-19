import Problem from './index';
import { iProblemParams } from './interface';

const problemParams: iProblemParams = {
  platform: 'programmers',
  problemId: '12345',
  name: '인턴 박살내기',
};

describe('Problem', () => {
  it('Platform 정보를 가진다.', () => {
    const problem = new Problem(problemParams);

    expect(problem.platform).toBe(problemParams.platform);
  });

  it('Problem Id 정보를 가진다.', () => {
    const problem = new Problem(problemParams);

    expect(problem.problemId).toBe(problemParams.problemId);
  });

  it('Name 정보를 가진다.', () => {
    const problem = new Problem(problemParams);

    expect(problem.name).toBe(problemParams.name);
  });
});
