// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

let runLength = (code) => {
    let encoded = ''

    let count = 1
    for (let i = 0; i < code.length; i++){
        let char = code[i]
        if(char === code[i+1]){
            count++
        } else {
            encoded += count + char
            count = 1
        }
    }
    console.log(encoded)

}

runLength('AAAABBBCCDAA')