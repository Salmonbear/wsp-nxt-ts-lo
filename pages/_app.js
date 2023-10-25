export default function CustomApp({ Component, pageProps }) {
  return (
     <>
      <Component {...pageProps} />
      <script defer data-domain="weddingspeechpro.io" src="https://plausible.io/js/script.js"></script>
      <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="ad2ff61b-ed8d-49c9-bb5e-035c5a76f901";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
     </>
  );
}
