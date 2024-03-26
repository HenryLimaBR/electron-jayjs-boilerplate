import electron from 'vite-plugin-electron/simple'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    electron({
      main: {
        // Shortcut of `build.lib.entry`
        entry: 'src/main/main.ts',
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`
        input: 'src/preload/preload.ts',
      },
      // Optional: Use Node.js API in the Renderer process
      // renderer: {},
    }),
  ],
}
