var fibonacci = exports.fibonacci = function(n, done) {
    if (n === 0)
        done(undefined, 0);
    else if (n === 1 || n === 2)
        done(undefined, 1);
    else {
        setImmediate(() => {
            fibonacci(n-1, (err, val1) => {
                if (err) done(err);
                else setImmediate(() => {
                    fibonacci(n-2, (err, val2) => {
                        if (err) done(err);
                        else done(undefined, val1+val2);
                    });
                });
            });
        });
    }
};
