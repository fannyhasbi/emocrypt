import { Rabbit, DecryptedMessage } from 'crypto-js';

function sayHello(name: string): string {
  return 'Hello, ' + name;
}

function encrypt(message: string, key: string): string {
  return Rabbit.encrypt(message, key).toString();
}

function decrypt(cipher: string, key: string) : DecryptedMessage {
  return Rabbit.decrypt(cipher, key);
}

export {
  sayHello,
  encrypt,
  decrypt,
};