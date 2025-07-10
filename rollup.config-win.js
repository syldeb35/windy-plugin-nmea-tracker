import { transformCodeToESMPlugin, keyPEM, certificatePEM } from '@windycom/plugin-devtools';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/plugin.svelte',
    output: {
        file: 'dist/plugin.js',
        format: 'module',
    },
    external: id => id.startsWith('@windy/'),
    plugins: [
        svelte({ emitCss: false }),
        resolve({ browser: true }),
        commonjs(),
        transformCodeToESMPlugin(),
        process.env.SERVE !== 'false' && serve({
            contentBase: 'dist',
            host: '0.0.0.0',
            port: 9999,
            headers: { 'Access-Control-Allow-Origin': '*' },
            https: { key: keyPEM, cert: certificatePEM },
        }),
    ].filter(Boolean),
};