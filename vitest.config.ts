import { defineVitestConfig } from "@nuxt/test-utils/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        ".nuxt/",
        "dist/",
        "**/*.config.*",
        "**/*.d.ts",
        "**/types/**",
        "**/assets/**",
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },

  plugins: [tsconfigPaths()],
});
