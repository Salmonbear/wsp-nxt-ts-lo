export default function CustomApp({ Component, pageProps }) {
  return (
     <>
      <Component {...pageProps} />
      <script defer data-domain="weddingspeechpro.io" src="https://plausible.io/js/script.js"></script>
     </>
  );
}
