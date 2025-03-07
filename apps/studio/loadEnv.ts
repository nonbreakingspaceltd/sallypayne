// Retrieves an environment variable from either process.env or import.meta.env
const getEnvVar = (key: string, required = false): string => {
  const value = process.env[key];

  if (required && !value) {
    console.error(
      `Missing required environment variable: ${key}\n
      Please ensure it is set in your .env file or environment.`,
    );
  }

  return value as string;
};

// Environment variables used throughout the application
export const env: Partial<Env> = {
  DEV: !!getEnvVar('DEV', false),
  SANITY_STUDIO_API_TOKEN: getEnvVar('SANITY_STUDIO_API_TOKEN', false),
};
