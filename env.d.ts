declare namespace NodeJS {
  interface ProcessEnv {
    FIREBASE_API_KEY: string;
    FIREBASE_TYPE: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_PRIVATE_KEY_ID: string;
    FIREBASE_PRIVATE_KEY: string;
    FIREBASE_CLIENT_EMAIL: string;
    FIREBASE_CLIENT_ID: string;
    FIREBASE_AUTH_URI: string;
    FIREBASE_TOKEN_URI: string;
    FIREBASE_AUTH_PROVIDER_CERT_URL: string;
    FIREBASE_CLIENT_CERT_URL: string;
    FIREBASE_DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    AUTH_SECRET: string;
  }
}
