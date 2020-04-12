import { Rabbit, DecryptedMessage } from 'crypto-js';

const emojis: Array<string> = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😘', '😍', '😘', '😗', '☺', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹', '😮', '😯'];
const emojisLength: number = emojis.length;
const maxChars: number = 65; // base64 characters count

function possibleEmojis(index: number): Array<string> {
  let possibilities: Array<string> = [];
  for(let i = 0; i < emojisLength; i += maxChars+index) {
    possibilities.push(emojis[index]);
  }
  return possibilities
}

function pickEmoji(index: number): string {
  let emos: Array<string> = possibleEmojis(index);
  let rand: number = Math.floor(Math.random() * Math.floor(emos.length));
  return emos[rand];
}

function encrypt(message: string, key: string): string {
  const encrypted = Rabbit.encrypt(message, key).toString();

  let convertedEmoji: string = encrypted.replace(/a/g, pickEmoji(0));
  convertedEmoji = convertedEmoji.replace(/b/g, pickEmoji(1));
  convertedEmoji = convertedEmoji.replace(/c/g, pickEmoji(2));
  convertedEmoji = convertedEmoji.replace(/d/g, pickEmoji(3));
  convertedEmoji = convertedEmoji.replace(/e/g, pickEmoji(4));
  convertedEmoji = convertedEmoji.replace(/f/g, pickEmoji(5));
  convertedEmoji = convertedEmoji.replace(/g/g, pickEmoji(6));
  convertedEmoji = convertedEmoji.replace(/h/g, pickEmoji(7));
  convertedEmoji = convertedEmoji.replace(/i/g, pickEmoji(8));
  convertedEmoji = convertedEmoji.replace(/j/g, pickEmoji(9));
  convertedEmoji = convertedEmoji.replace(/k/g, pickEmoji(10));
  convertedEmoji = convertedEmoji.replace(/l/g, pickEmoji(11));
  convertedEmoji = convertedEmoji.replace(/m/g, pickEmoji(12));
  convertedEmoji = convertedEmoji.replace(/n/g, pickEmoji(13));
  convertedEmoji = convertedEmoji.replace(/o/g, pickEmoji(14));
  convertedEmoji = convertedEmoji.replace(/p/g, pickEmoji(15));
  convertedEmoji = convertedEmoji.replace(/q/g, pickEmoji(16));
  convertedEmoji = convertedEmoji.replace(/r/g, pickEmoji(17));
  convertedEmoji = convertedEmoji.replace(/s/g, pickEmoji(18));
  convertedEmoji = convertedEmoji.replace(/t/g, pickEmoji(19));
  convertedEmoji = convertedEmoji.replace(/u/g, pickEmoji(20));
  convertedEmoji = convertedEmoji.replace(/v/g, pickEmoji(21));
  convertedEmoji = convertedEmoji.replace(/w/g, pickEmoji(22));
  convertedEmoji = convertedEmoji.replace(/x/g, pickEmoji(23));
  convertedEmoji = convertedEmoji.replace(/y/g, pickEmoji(24));
  convertedEmoji = convertedEmoji.replace(/z/g, pickEmoji(25));

  convertedEmoji = convertedEmoji.replace(/A/g, pickEmoji(26));
  convertedEmoji = convertedEmoji.replace(/B/g, pickEmoji(27));
  convertedEmoji = convertedEmoji.replace(/C/g, pickEmoji(28));
  convertedEmoji = convertedEmoji.replace(/D/g, pickEmoji(29));
  convertedEmoji = convertedEmoji.replace(/E/g, pickEmoji(30));
  convertedEmoji = convertedEmoji.replace(/F/g, pickEmoji(31));
  convertedEmoji = convertedEmoji.replace(/G/g, pickEmoji(32));
  convertedEmoji = convertedEmoji.replace(/H/g, pickEmoji(33));
  convertedEmoji = convertedEmoji.replace(/I/g, pickEmoji(34));
  convertedEmoji = convertedEmoji.replace(/J/g, pickEmoji(35));
  convertedEmoji = convertedEmoji.replace(/K/g, pickEmoji(36));
  convertedEmoji = convertedEmoji.replace(/L/g, pickEmoji(37));
  convertedEmoji = convertedEmoji.replace(/M/g, pickEmoji(38));
  convertedEmoji = convertedEmoji.replace(/N/g, pickEmoji(39));
  convertedEmoji = convertedEmoji.replace(/O/g, pickEmoji(40));
  convertedEmoji = convertedEmoji.replace(/P/g, pickEmoji(41));
  convertedEmoji = convertedEmoji.replace(/Q/g, pickEmoji(42));
  convertedEmoji = convertedEmoji.replace(/R/g, pickEmoji(43));
  convertedEmoji = convertedEmoji.replace(/S/g, pickEmoji(44));
  convertedEmoji = convertedEmoji.replace(/T/g, pickEmoji(45));
  convertedEmoji = convertedEmoji.replace(/U/g, pickEmoji(46));
  convertedEmoji = convertedEmoji.replace(/V/g, pickEmoji(47));
  convertedEmoji = convertedEmoji.replace(/W/g, pickEmoji(48));
  convertedEmoji = convertedEmoji.replace(/X/g, pickEmoji(49));
  convertedEmoji = convertedEmoji.replace(/Y/g, pickEmoji(50));
  convertedEmoji = convertedEmoji.replace(/Z/g, pickEmoji(51));

  convertedEmoji = convertedEmoji.replace(/0/g, pickEmoji(52));
  convertedEmoji = convertedEmoji.replace(/1/g, pickEmoji(53));
  convertedEmoji = convertedEmoji.replace(/2/g, pickEmoji(54));
  convertedEmoji = convertedEmoji.replace(/3/g, pickEmoji(55));
  convertedEmoji = convertedEmoji.replace(/4/g, pickEmoji(56));
  convertedEmoji = convertedEmoji.replace(/5/g, pickEmoji(57));
  convertedEmoji = convertedEmoji.replace(/6/g, pickEmoji(58));
  convertedEmoji = convertedEmoji.replace(/7/g, pickEmoji(59));
  convertedEmoji = convertedEmoji.replace(/8/g, pickEmoji(60));
  convertedEmoji = convertedEmoji.replace(/9/g, pickEmoji(61));

  convertedEmoji = convertedEmoji.replace(/\+/g, pickEmoji(62));
  convertedEmoji = convertedEmoji.replace(/\//g, pickEmoji(63));
  convertedEmoji = convertedEmoji.replace(/=/g, pickEmoji(64));

  return convertedEmoji;
}

function revealOriginEmojis(cipher: string): string {
  const cipherChars = [...cipher];
  for(let i = 0; i < cipherChars.length; i++){
    let index: number = emojis.indexOf(cipherChars[i]); // find the emoji from cipher
    
    if(index === -1){
      continue;
    }
    index = index % maxChars; // reveal the origin emoji index
    
    cipherChars[i] = emojis[index];
  }

  return cipherChars.join('');
}

function decrypt(cipher: string, key: string) : DecryptedMessage {
  cipher = revealOriginEmojis(cipher);

  let extractedEmoji: string = cipher.replace(new RegExp(emojis[0], "g"), 'a');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[1], "g"), 'b');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[2], "g"), 'c');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[3], "g"), 'd');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[4], "g"), 'e');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[5], "g"), 'f');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[6], "g"), 'g');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[7], "g"), 'h');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[8], "g"), 'i');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[9], "g"), 'j');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[10], "g"), 'k');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[11], "g"), 'l');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[12], "g"), 'm');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[13], "g"), 'n');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[14], "g"), 'o');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[15], "g"), 'p');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[16], "g"), 'q');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[17], "g"), 'r');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[18], "g"), 's');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[19], "g"), 't');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[20], "g"), 'u');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[21], "g"), 'v');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[22], "g"), 'w');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[23], "g"), 'x');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[24], "g"), 'y');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[25], "g"), 'z');

  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[26], "g"), 'A');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[27], "g"), 'B');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[28], "g"), 'C');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[29], "g"), 'D');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[30], "g"), 'E');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[31], "g"), 'F');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[32], "g"), 'G');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[33], "g"), 'H');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[34], "g"), 'I');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[35], "g"), 'J');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[36], "g"), 'K');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[37], "g"), 'L');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[38], "g"), 'M');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[39], "g"), 'N');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[40], "g"), 'O');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[41], "g"), 'P');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[42], "g"), 'Q');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[43], "g"), 'R');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[44], "g"), 'S');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[45], "g"), 'T');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[46], "g"), 'U');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[47], "g"), 'V');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[48], "g"), 'W');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[49], "g"), 'X');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[50], "g"), 'Y');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[51], "g"), 'Z');

  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[52], "g"), '0');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[53], "g"), '1');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[54], "g"), '2');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[55], "g"), '3');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[56], "g"), '4');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[57], "g"), '5');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[58], "g"), '6');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[59], "g"), '7');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[60], "g"), '8');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[61], "g"), '9');

  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[62], "g"), '+');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[63], "g"), '/');
  extractedEmoji = extractedEmoji.replace(new RegExp(emojis[64], "g"), '=');

  return Rabbit.decrypt(extractedEmoji, key);
}

export {
  emojis,
  maxChars,
  pickEmoji,
  encrypt,
  revealOriginEmojis,
  decrypt,
};