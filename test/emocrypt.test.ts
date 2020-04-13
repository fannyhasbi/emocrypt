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

describe('bacforward', () => {
  it('should the same', () => {
    let emo = new EmoCrypt();
    const message: string = 'Hello world';
    const key: string = 'yoyoy';

    let cip: string = emo.encrypt(message, key);
    let mes: string = emo.decrypt(cip, key);

    assert.equal(mes, message);
  });

  it('is long message, should be correct', () => {
    let emo = new EmoCrypt();
    const message: string = 'Clipboard.js is a handy JavaScript library that has make adding the copy utility to web pages much less complicated. In this tutorial, we looked into the basics, then some advanced stuff with the exposed APIs and the custom events.';
    const key: string = 'helloworld';
    
    let cip: string = emo.encrypt(message, key);
    let mes: string = emo.decrypt(cip, key);

    assert.typeOf(cip, 'string');
    assert.isAbove(cip.length, 0);
    assert.typeOf(mes, 'string');
    assert.isAbove(mes.length, 0);
    assert.equal(mes, message);
  });
});