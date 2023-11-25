import React from 'react';
import Head from 'next/head';

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Plausible Analytics Script */}
        <script 
          defer 
          data-domain="weddingspeechpro.io" 
          src="https://plausible.io/js/script.js"
        />

        {/* Crisp Chat Script */}
        <script 
          defer 
          src="https://client.crisp.chat/l.js"
        />

        {/* Heap Analytics Script */}
        <script 
          defer 
          src="https://cdn.heapanalytics.com/js/heap-902320288.js"
        />

        {/* Inline Scripts (If needed) */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "ad2ff61b-ed8d-49c9-bb5e-035c5a76f901";
              window.heap=window.heap||[];
              heap.load=function(e,t){
                window.heap.appid=e,window.heap.config=t=t||{};
                for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},
                p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
                heap.load("902320288");
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
