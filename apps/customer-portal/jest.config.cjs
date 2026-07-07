module.exports = {
    ...require("@repo/jest-config/react"),
    testMatch: [
        "<rootDir>/src/test/**/*.test.ts",
        "<rootDir>/src/test/**/*.test.tsx"
    ]
}
