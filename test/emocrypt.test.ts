import { assert } from 'chai';
import { enc } from 'crypto-js';
import { sayHello, encrypt, decrypt } from '../src/emocrypt';

describe('Trial', () => {
  it('should return hello name', () => {
    assert.equal(sayHello('Hasbi'), 'Hello, Hasbi');
  });
});

describe('Initial crypto', () => {
  it('should return string', () => {
    let cipher = encrypt('hello', '123');

    assert.equal(typeof cipher, 'string');
  });

  it('should successfully decrypt', () => {
    let message = decrypt('U2FsdGVkX18DV/Lyte8IsaxBpnKm', '123');
    console.log(message.toString(enc.Utf8));
    assert.equal(typeof message, 'object');
  })
});

