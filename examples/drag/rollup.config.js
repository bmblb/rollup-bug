import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-re';

export default {
    input  : 'examples/drag/app.js',
    output : {
        file      : 'examples/drag/app.module.js',
        format    : 'es',
        sourcemap : true
    },
    plugins : [
        replace({
            patterns : [
                {
                    exclude   : ['node_modules/**'],
                    transform : function(code) {
                        // We don't want to end up with all library classes in our rollup so we comment them
                        return code.replace(/(import .*(lib\/Tool).+?(\.js';))/g, '//$1');
                    }
                }
            ]
        }),
        commonjs()
    ]
};
