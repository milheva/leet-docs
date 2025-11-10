function isPalindrome(x: number): boolean {
    let defaultValue = x.toString();
    let reversedValue = defaultValue.split('').reverse().join('');

    return reversedValue === defaultValue;
};