// pages/_app.js
import '../styles/globals.css';  // adjust path if your CSS lives elsewhere

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
