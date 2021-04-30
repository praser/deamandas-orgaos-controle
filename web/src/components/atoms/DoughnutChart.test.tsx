import faker from 'faker';
import { datasetAssembler } from './DoughnutChart';

describe('DoughnutChart dataAssembler', () => {
  const labels = [faker.lorem.word()];
  const data = [faker.datatype.number(100)];

  it('is expected to be valid', () => {
    const subject = datasetAssembler({ labels, data });
    expect(subject.labels).toBe(labels);
    expect(subject.datasets[0].data).toBe(data);
    expect(Object.keys(subject.datasets[0])).toContain('backgroundColor');
    expect(Object.keys(subject.datasets[0])).toContain('borderColor');
    expect(Object.keys(subject.datasets[0])).toContain('borderWidth');
  });
});
