import { assert } from 'chai';
import { enc } from 'crypto-js';
import EmoCrypt from '../src/emocrypt';

describe('Encryption prelogic', () => {
  it('should return the string of emoji', () => {
    let emo = new EmoCrypt('123');
    let result = emo.pickEmoji(64);
    assert.typeOf(result, 'string');
    assert.isAbove(result.length, 0);
  });
});

describe('Initial crypto', () => {
  it('should return string of emojis', () => {
    let emo = new EmoCrypt('123');
    let cipher = emo.encrypt('hello');
    assert.typeOf(cipher, 'string');
  });

  it('should successfully decrypt', () => {
    let emo = new EmoCrypt('123');
    let dec = emo.decrypt('🤒😵🤨😚😁😐🤕😉🤮🥴😟😍😋😙🤥🤣😊🙂😪🤣😑😒😇😚🥵😚😷🤐');
    let m = dec.toString(enc.Utf8);

    assert.typeOf(dec, 'object');
    assert.typeOf(m, 'string');
  });
});