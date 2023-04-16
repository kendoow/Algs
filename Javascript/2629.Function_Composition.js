var compose = function(functions) {
    return x => functions.reduceRight((x, fn) => fn(x), x);
};