/**
 * This function tests if a string is empty.
 *
 * @param {string} str - the string to test
 * @returns {boolean} - true if string is empty, false otherwise
 */
function test(str: string): void {
    try {
        if(str.length == 0){
            throw new Error('String is empty');
        }
    } catch(err) {
        console.error(err);
    }
}