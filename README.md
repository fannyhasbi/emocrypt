# emocrypt
Emoji encryption with Rabbit cipher

| Message | Secret | Result |
|---|---|---|
| emocrypt | hasbi | 🤒😵🤨😚😁😐🤕😉🤮🥴🙁🤐😎😙😑😛😃🥳🤠😶☺🤥😆😎😆😘🙂🤓😎😒😘🤫 |
| IGOTYOU | hasbi | 🤒😵🤨😚😁😐🤕😉🤮🥴😕🤨😘🤭🤢😚😆😁😘😀😆🤨😅🤑😌😎😋🤮😗😄😒😬 |

Rabbit is a stream cipher, so when you provide the same message and secret it would generate different cipher message.

## Demo
https://fannyhasbi.id/emocrypt

## Installation
1. Clone / download this project
2. Download the required packages
   ```shell
   npm install
   ```
3. Run the test
   ```shell
   npm run test
   ```

## References
* https://en.wikipedia.org/wiki/Rabbit_(cipher)