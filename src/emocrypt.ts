import { Rabbit, DecryptedMessage } from 'crypto-js';

class EmoCrypt {
  private static readonly emojis: Array<string> = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😘', '😍', '😘', '😗', '☺', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹', '😮', '😯'];
  private static readonly emojisLength: number = EmoCrypt.emojis.length;
  private static readonly maxChars: number = 65; // base64 characters count
  key: string;

  constructor(secretKey: string) {
    this.key = secretKey;
  }
  
  possibleEmojis(index: number): Array<string> {
    let possibilities: Array<string> = [];
    for(let i = 0; i < EmoCrypt.emojisLength; i += EmoCrypt.maxChars+index) {
      possibilities.push(EmoCrypt.emojis[index]);
    }
    return possibilities
  }

  pickEmoji(index: number): string {
    let emos: Array<string> = this.possibleEmojis(index);
    let rand: number = Math.floor(Math.random() * Math.floor(emos.length));
    return emos[rand];
  }

  encrypt(message: string): string {
    const encrypted = Rabbit.encrypt(message, this.key).toString();
  
    let convertedEmoji: string = encrypted.replace(/a/g, this.pickEmoji(0));
    convertedEmoji = convertedEmoji.replace(/b/g, this.pickEmoji(1));
    convertedEmoji = convertedEmoji.replace(/c/g, this.pickEmoji(2));
    convertedEmoji = convertedEmoji.replace(/d/g, this.pickEmoji(3));
    convertedEmoji = convertedEmoji.replace(/e/g, this.pickEmoji(4));
    convertedEmoji = convertedEmoji.replace(/f/g, this.pickEmoji(5));
    convertedEmoji = convertedEmoji.replace(/g/g, this.pickEmoji(6));
    convertedEmoji = convertedEmoji.replace(/h/g, this.pickEmoji(7));
    convertedEmoji = convertedEmoji.replace(/i/g, this.pickEmoji(8));
    convertedEmoji = convertedEmoji.replace(/j/g, this.pickEmoji(9));
    convertedEmoji = convertedEmoji.replace(/k/g, this.pickEmoji(10));
    convertedEmoji = convertedEmoji.replace(/l/g, this.pickEmoji(11));
    convertedEmoji = convertedEmoji.replace(/m/g, this.pickEmoji(12));
    convertedEmoji = convertedEmoji.replace(/n/g, this.pickEmoji(13));
    convertedEmoji = convertedEmoji.replace(/o/g, this.pickEmoji(14));
    convertedEmoji = convertedEmoji.replace(/p/g, this.pickEmoji(15));
    convertedEmoji = convertedEmoji.replace(/q/g, this.pickEmoji(16));
    convertedEmoji = convertedEmoji.replace(/r/g, this.pickEmoji(17));
    convertedEmoji = convertedEmoji.replace(/s/g, this.pickEmoji(18));
    convertedEmoji = convertedEmoji.replace(/t/g, this.pickEmoji(19));
    convertedEmoji = convertedEmoji.replace(/u/g, this.pickEmoji(20));
    convertedEmoji = convertedEmoji.replace(/v/g, this.pickEmoji(21));
    convertedEmoji = convertedEmoji.replace(/w/g, this.pickEmoji(22));
    convertedEmoji = convertedEmoji.replace(/x/g, this.pickEmoji(23));
    convertedEmoji = convertedEmoji.replace(/y/g, this.pickEmoji(24));
    convertedEmoji = convertedEmoji.replace(/z/g, this.pickEmoji(25));
  
    convertedEmoji = convertedEmoji.replace(/A/g, this.pickEmoji(26));
    convertedEmoji = convertedEmoji.replace(/B/g, this.pickEmoji(27));
    convertedEmoji = convertedEmoji.replace(/C/g, this.pickEmoji(28));
    convertedEmoji = convertedEmoji.replace(/D/g, this.pickEmoji(29));
    convertedEmoji = convertedEmoji.replace(/E/g, this.pickEmoji(30));
    convertedEmoji = convertedEmoji.replace(/F/g, this.pickEmoji(31));
    convertedEmoji = convertedEmoji.replace(/G/g, this.pickEmoji(32));
    convertedEmoji = convertedEmoji.replace(/H/g, this.pickEmoji(33));
    convertedEmoji = convertedEmoji.replace(/I/g, this.pickEmoji(34));
    convertedEmoji = convertedEmoji.replace(/J/g, this.pickEmoji(35));
    convertedEmoji = convertedEmoji.replace(/K/g, this.pickEmoji(36));
    convertedEmoji = convertedEmoji.replace(/L/g, this.pickEmoji(37));
    convertedEmoji = convertedEmoji.replace(/M/g, this.pickEmoji(38));
    convertedEmoji = convertedEmoji.replace(/N/g, this.pickEmoji(39));
    convertedEmoji = convertedEmoji.replace(/O/g, this.pickEmoji(40));
    convertedEmoji = convertedEmoji.replace(/P/g, this.pickEmoji(41));
    convertedEmoji = convertedEmoji.replace(/Q/g, this.pickEmoji(42));
    convertedEmoji = convertedEmoji.replace(/R/g, this.pickEmoji(43));
    convertedEmoji = convertedEmoji.replace(/S/g, this.pickEmoji(44));
    convertedEmoji = convertedEmoji.replace(/T/g, this.pickEmoji(45));
    convertedEmoji = convertedEmoji.replace(/U/g, this.pickEmoji(46));
    convertedEmoji = convertedEmoji.replace(/V/g, this.pickEmoji(47));
    convertedEmoji = convertedEmoji.replace(/W/g, this.pickEmoji(48));
    convertedEmoji = convertedEmoji.replace(/X/g, this.pickEmoji(49));
    convertedEmoji = convertedEmoji.replace(/Y/g, this.pickEmoji(50));
    convertedEmoji = convertedEmoji.replace(/Z/g, this.pickEmoji(51));
  
    convertedEmoji = convertedEmoji.replace(/0/g, this.pickEmoji(52));
    convertedEmoji = convertedEmoji.replace(/1/g, this.pickEmoji(53));
    convertedEmoji = convertedEmoji.replace(/2/g, this.pickEmoji(54));
    convertedEmoji = convertedEmoji.replace(/3/g, this.pickEmoji(55));
    convertedEmoji = convertedEmoji.replace(/4/g, this.pickEmoji(56));
    convertedEmoji = convertedEmoji.replace(/5/g, this.pickEmoji(57));
    convertedEmoji = convertedEmoji.replace(/6/g, this.pickEmoji(58));
    convertedEmoji = convertedEmoji.replace(/7/g, this.pickEmoji(59));
    convertedEmoji = convertedEmoji.replace(/8/g, this.pickEmoji(60));
    convertedEmoji = convertedEmoji.replace(/9/g, this.pickEmoji(61));
  
    convertedEmoji = convertedEmoji.replace(/\+/g, this.pickEmoji(62));
    convertedEmoji = convertedEmoji.replace(/\//g, this.pickEmoji(63));
    convertedEmoji = convertedEmoji.replace(/=/g, this.pickEmoji(64));
  
    return convertedEmoji;
  }

  revealOriginEmojis(cipher: string): string {
    const cipherChars = [...cipher];
    for(let i = 0; i < cipherChars.length; i++){
      // find the emoji from cipher
      let index: number = EmoCrypt.emojis.indexOf(cipherChars[i]);
      
      if(index === -1){
        continue;
      }
      // reveal the origin emoji index
      index = index % EmoCrypt.maxChars;
      
      cipherChars[i] = EmoCrypt.emojis[index];
    }
  
    return cipherChars.join('');
  }
  
  decrypt(cipher: string) : DecryptedMessage {
    cipher = this.revealOriginEmojis(cipher);

    let extractedEmoji: string = cipher.replace(new RegExp(EmoCrypt.emojis[0], "g"), 'a');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[1], "g"), 'b');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[2], "g"), 'c');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[3], "g"), 'd');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[4], "g"), 'e');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[5], "g"), 'f');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[6], "g"), 'g');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[7], "g"), 'h');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[8], "g"), 'i');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[9], "g"), 'j');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[10], "g"), 'k');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[11], "g"), 'l');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[12], "g"), 'm');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[13], "g"), 'n');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[14], "g"), 'o');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[15], "g"), 'p');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[16], "g"), 'q');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[17], "g"), 'r');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[18], "g"), 's');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[19], "g"), 't');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[20], "g"), 'u');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[21], "g"), 'v');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[22], "g"), 'w');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[23], "g"), 'x');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[24], "g"), 'y');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[25], "g"), 'z');
  
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[26], "g"), 'A');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[27], "g"), 'B');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[28], "g"), 'C');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[29], "g"), 'D');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[30], "g"), 'E');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[31], "g"), 'F');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[32], "g"), 'G');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[33], "g"), 'H');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[34], "g"), 'I');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[35], "g"), 'J');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[36], "g"), 'K');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[37], "g"), 'L');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[38], "g"), 'M');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[39], "g"), 'N');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[40], "g"), 'O');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[41], "g"), 'P');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[42], "g"), 'Q');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[43], "g"), 'R');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[44], "g"), 'S');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[45], "g"), 'T');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[46], "g"), 'U');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[47], "g"), 'V');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[48], "g"), 'W');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[49], "g"), 'X');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[50], "g"), 'Y');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[51], "g"), 'Z');
  
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[52], "g"), '0');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[53], "g"), '1');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[54], "g"), '2');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[55], "g"), '3');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[56], "g"), '4');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[57], "g"), '5');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[58], "g"), '6');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[59], "g"), '7');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[60], "g"), '8');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[61], "g"), '9');
  
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[62], "g"), '+');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[63], "g"), '/');
    extractedEmoji = extractedEmoji.replace(new RegExp(EmoCrypt.emojis[64], "g"), '=');
  
    return Rabbit.decrypt(extractedEmoji, this.key);
  }
}

export default EmoCrypt;
