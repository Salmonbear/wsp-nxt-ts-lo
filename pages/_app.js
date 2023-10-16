export default function CustomApp({ Component, pageProps }) {
  return (
     <>
      <Component {...pageProps} />
      <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="f76cd8af-c1f3-4945-8694-b3733e439047" async></script>
     </>
  );
}
