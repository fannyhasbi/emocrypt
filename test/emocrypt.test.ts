import { assert } from 'chai';
import { enc } from 'crypto-js';
import {
  emojis,
  encrypt,
  decrypt,
  possibleEmojis,
} from '../src/emocrypt';

describe('Encryption prelogic', () => {
  it('should return more than 0', () => {
    assert.isAtLeast(possibleEmojis(10).length, 1);
    assert.isAtLeast(possibleEmojis(20).length, 1);
    assert.isAtLeast(possibleEmojis(30).length, 1);
    assert.isAtLeast(possibleEmojis(40).length, 1);
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

describe('Emojis', () => {
  it('is more than 1', () => {
    console.log('emojis count :', emojis.length);
    assert.isAbove(emojis.length, 1);
  })
});