export const PagesIterable = (superclass) => class extends superclass {
    [Symbol.iterator] = () => {
        let index = 0;
        return {
            next() {
                if (index < superclass.length) {
                    return { value: superclass[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}
