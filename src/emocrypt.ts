import { Rabbit, DecryptedMessage } from 'crypto-js';

const emojis: Array<string> = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😘', '😍', '😘', '😗', '☺', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹', '😮', '😯'];
const emojisLength = emojis.length;
const maxChars = 65; // base64 characters count

function possibleEmojis(index: number): Array<string>{
  let possibilities: Array<string> = [];
  for(let i = 0; i < emojisLength; i += maxChars+index){
    possibilities.push(emojis[index]);
  }
  return possibilities
}

function encrypt(message: string, key: string): string {
  return Rabbit.encrypt(message, key).toString();
}

function decrypt(cipher: string, key: string) : DecryptedMessage {
  return Rabbit.decrypt(cipher, key);
}

export {
  emojis,
  possibleEmojis,
  encrypt,
  decrypt,
};