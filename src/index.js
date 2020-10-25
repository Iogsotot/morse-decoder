const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = expr.match(/.{1,10}/g);                           //делим на слова по 10
    let decodeSentence = [];
    for(let i = 0; i < word.length; i++) {
        let letter = word[i].replace(/11/g, '-').replace(/10/g, '.').replace(/00/ig,'').replace(/\\*/ig,'');   // сложная операция преобразования всяких там символов в точки и тирешки
        letter = MORSE_TABLE[letter] ? MORSE_TABLE[letter] : ' ';             // смотрим в нашу мапу и достаём из неё нужные значения ( а если хи нет, то пробел)
        decodeSentence.push(letter);
    }
    return decodeSentence.join('');
}

module.exports = {
    decode
}
