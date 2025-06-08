// pages/_app.js
import '../public/styles.css';  // adjust path if your CSS lives elsewhere

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
