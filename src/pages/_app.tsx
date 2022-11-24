import type { AppProps } from "next/app";
import { ChatProvider } from "../contexts/ChatContext";
import { UserProvider } from "../contexts/UserContext";
import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChatProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChatProvider>
    </UserProvider>
  );
}
