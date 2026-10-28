function createArrayIterator(array) {
    let index = 0;

    return function() {
        if (index < array.length) {
            return array[index++];
        }

        return undefined;
    };
}
 
