// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Ensure this is the correct entry file
  format: ['cjs', 'esm'], // Generate both CommonJS and ESM outputs
  dts: true,              // Generate type definitions
  outDir: 'dist',         // Output directory
  sourcemap: true,
  clean: true,            // Clear output directory before building
  target: 'esnext',
});