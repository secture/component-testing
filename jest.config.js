module.exports = {
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
}