import { assert } from 'chai';
import { sayHello } from '../src/main';

describe('Trial', () => {
  it('should return hello name', () => {
    assert.equal(sayHello('Hasbi'), 'Hello, Hasbi');
  });
});
