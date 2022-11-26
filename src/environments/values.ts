const ENVIRONMENT = process.env.ENVIRONMENT as string;

const BASE_URL_BACKEND =
  ENVIRONMENT === "PROD"
    ? process.env.NEXT_PUBLIC_BASE_URL_BACKEND
    : process.env.NEXT_PUBLIC_BASE_URL_BACKEND_DEV;
const BASE_SOCKET_BACKEND =
  ENVIRONMENT === "PROD"
    ? process.env.NEXT_PUBLIC_BASE_URL_SOCKET
    : process.env.NEXT_PUBLIC_BASE_URL_SOCKET_DEV;

export { BASE_URL_BACKEND, BASE_SOCKET_BACKEND };
