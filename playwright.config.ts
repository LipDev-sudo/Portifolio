import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  retries: 0,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:3101",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run build && npm run start -- -p 3101",
    url: "http://127.0.0.1:3101",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
