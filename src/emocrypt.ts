import { Rabbit, DecryptedMessage } from 'crypto-js';

const emojis: Array<string> = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😘', '😍', '😘', '😗', '☺', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹', '😮', '😯'];

function encrypt(message: string, key: string): string {
  return Rabbit.encrypt(message, key).toString();
}

function decrypt(cipher: string, key: string) : DecryptedMessage {
  return Rabbit.decrypt(cipher, key);
}

export {
  emojis,
  encrypt,
  decrypt,
};