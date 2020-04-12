import { assert } from 'chai';
import { enc } from 'crypto-js';
import {
  emojis,
  maxChars,
  pickEmoji,
  encrypt,
  revealOriginEmojis,
  decrypt,
} from '../src/emocrypt';

describe('Emojis', () => {
  it('is more than 1', () => {
    console.log('emojis count :', emojis.length);
    assert.isAbove(emojis.length, 1);
  })
});

describe('Encryption prelogic', () => {
  it('should return the string of emoji', () => {
    let result = pickEmoji(64);
    assert.typeOf(result, 'string');
    assert.isAbove(result.length, 0);
  });
});

describe('Decryption prelogic', () => {
  it('index less than maxChars should return the same', function(){
    for(let i = 0; i < maxChars; i++){
      assert.equal(revealOriginEmojis(emojis[i]), emojis[i], `${emojis[i]} failed at index ${i}`);
    };
  });

  it('index bigger than maxChars should return the origin', function(){
    for(let i = maxChars; i < emojis.length; i++){
      // given
      let expected = revealOriginEmojis(emojis[i % maxChars])
      
      // when
      let result = revealOriginEmojis(emojis[i]);

      // then
      assert.equal(result, expected, `${emojis[i]} failed at index ${i}`);
    }
  });
});

describe('Initial crypto', () => {
  it('should return string of emojis', () => {
    let cipher = encrypt('hello', '123');
    assert.typeOf(cipher, 'string');
  });

  it('should successfully decrypt', () => {
    let dec = decrypt('🤒😵🤨😚😁😐🤕😉🤮🥴😟😍😋😙🤥🤣😊🙂😪🤣😑😒😇😚🥵😚😷🤐', '123');
    let m = dec.toString(enc.Utf8);

    assert.typeOf(dec, 'object');
    assert.typeOf(m, 'string');
  });
});