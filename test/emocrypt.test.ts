import { assert } from 'chai';
import { enc } from 'crypto-js';
import {
  emojis,
  encrypt,
  decrypt,
  pickEmoji,
} from '../src/emocrypt';

describe('Encryption prelogic', () => {
  it('should return the string of emoji', () => {
    let result = pickEmoji(64);
    assert.equal(typeof result, 'string');
    assert.isAbove(result.length, 0);
  });
});

describe('Initial crypto', () => {
  it('should return string', () => {
    let cipher = encrypt('hello', '123');

    assert.equal(typeof cipher, 'string');
  });

  it('should successfully decrypt', () => {
    let message = decrypt('U2FsdGVkX18DV/Lyte8IsaxBpnKm', '123');
    assert.equal(typeof message, 'object');
  })
});

describe('Emojis', () => {
  it('is more than 1', () => {
    console.log('emojis count :', emojis.length);
    assert.isAbove(emojis.length, 1);
  })
});