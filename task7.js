function createRectangle() {
    let a = 1;
    let b = 1;

    return {
        setA: function(value) {
            if (typeof value === "number" && value > 0) {
                a = value;
            }
        },

        setB: function(value) {
            if (typeof value === "number" && value > 0) {
                b = value;
            }
        },

        getPerimeter: function() {
            return 2 * (a + b);
        },

        getArea: function() {
            return a * b;
        }
    };
}
