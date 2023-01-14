import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';
import externalGlobals from 'rollup-plugin-external-globals';
console.log(process.env.UNI_PLATFORM);
// https://vitejs.dev/config/
export default ({ mode, command }) => {
  console.log(mode, command);
  return defineConfig({
    plugins: [uni()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        //  tronWeb: path.resolve(__dirname, './static/tronweb/tronWeb.js'),
        // 'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
        web3: 'web3/dist/web3.min.js'
        // tronWeb: './static/tronweb/tronWeb.js'
      }
    },
    // other config
    build: {},
    server: {
      host: '0.0.0.0',
      port: 100,
      open: true,
      strictPort: true
    }
  });
};
