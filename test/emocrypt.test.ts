import { assert } from 'chai';
import { EmoCrypt } from '../src/emocrypt';

describe('Encryption process', () => {
  it('should return string of emojis', () => {
    let emo = new EmoCrypt();
    let cipher = emo.encrypt('hello', '123');

    assert.typeOf(cipher, 'string');
    assert.isAbove(cipher.length, 0);
  });

  it('empty key, should return string of emojis', () => {
    let emo = new EmoCrypt();
    let cipher = emo.encrypt('hello', '');

    assert.typeOf(cipher, 'string');
    assert.isAbove(cipher.length, 0);
  });
});

describe('Decryption process', () => {
  it('should successfully decrypt', () => {
    let emo = new EmoCrypt();
    let mes = emo.decrypt('🤒😵🤨😚😁😐🤕😉🤮🥴😟😍😋😙🤥🤣😊🙂😪🤣😑😒😇😚🥵😚😷🤐', '123');

    assert.typeOf(mes, 'string');
  });

  it('correct cipher with wrong key, should return empty string', () => {
    let emo = new EmoCrypt();
    let mes = emo.decrypt('🤒😵🤨😚😁😐🤕😉🤮🥴😟😍😋😙🤥🤣😊🙂😪🤣😑😒😇😚🥵😚😷🤐', 'hsadhjkasdkasdlkasdlajsd');

    assert.typeOf(mes, 'string');
    assert.equal(mes.length, 0);
  });

  it('is wrong cipher, should return an empty string', () => {
    let emo = new EmoCrypt();
    let mes = emo.decrypt('😟😍😋😙😊🙂😪🤣😑😒😇😚🥵😚😷🤐', '123');

    assert.typeOf(mes, 'string');
    assert.equal(mes.length, 0);
  });

  it('empty cipher, should return an empty string', () => {
    let emo = new EmoCrypt();
    let mes = emo.decrypt('', '123');

    assert.typeOf(mes, 'string');
    assert.equal(mes.length, 0);
  });
});