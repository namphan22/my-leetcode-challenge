const validateParenthesesFunc=(s)=> {
    const storage= [];
    const opening = {
        '(': true,
        '{': true,
        '[': true,
    };
    const closing = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (opening[char]) {
            storage.push(char);
        }
        else if (closing[char]) {
            const last = storage.pop();
            if (closing[char] !== last) {
                return false;
            }
        }
    }

    return storage.length === 0;
}

console.log(validateParenthesesFunc('(]'));
// output false
console.log(validateParenthesesFunc('()'));
//ouput true