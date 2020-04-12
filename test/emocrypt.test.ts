import { assert } from 'chai';
import { enc } from 'crypto-js';
import EmoCrypt from '../src/emocrypt';

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