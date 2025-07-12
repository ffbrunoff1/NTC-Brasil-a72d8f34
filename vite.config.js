
defineConfig({
  plugins: [react()],
  server: {
    port
  },
  build: {
    outDir: 'dist',
    sourcemap
  }
})