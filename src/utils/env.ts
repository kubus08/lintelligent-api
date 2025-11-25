import "dotenv/config";

export const env = {
    PORT: process.env.PORT || "3000",
    GITHUB_APP_ID: process.env.GITHUB_APP_ID!,
    GITHUB_PRIVATE_KEY: process.env.GITHUB_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET!,
    DATABASE_URL: process.env.DATABASE_URL!,
};