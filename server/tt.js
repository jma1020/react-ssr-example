
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { ChunkExtractor } from '@loadable/server';


const app = express();
const PORT = process.env.PORT || 3001;

// ...

app.use(express.static(path.resolve(__dirname, '../build')));





// app.get('*', (req, res) => {
//   const nodeStats = path.resolve(__dirname, './node/loadable-stats.json');
//   const webStats = path.resolve(__dirname, './web/loadable-stats.json');
//   const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
//   const { default: App } = nodeExtractor.requireEntrypoint();
//   const webExtractor = new ChunkExtractor({ statsFile: webStats });

//   const context = {};

//   const jsx = webExtractor.collectChunks(

//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>

//   );

//   const html = renderToString(jsx);


//   res.set('content-type', 'text/html');
//   res.send(`
//     <!DOCTYPE html>
//       <html lang="en">
//         <head>
//           <meta name="viewport" content="width=device-width, user-scalable=no">
//           <meta name="google" content="notranslate">
 
//           ${webExtractor.getLinkTags()}
//           ${webExtractor.getStyleTags()}
//         </head>
//         <body>
//           <div id="root">${html}</div>
//           ${webExtractor.getScriptTags()}
//         </body>
//       </html>
//   `);
// });



// app.use('/', (req, res) => {
//   const content = ReactDOMServer.renderToString(<AppServer />);
//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>React SSR</title>
//       </head>
//       <body>
//         <div id="root">${content}</div>
//       </body>
//     </html>
//   `;

//   res.send(html);
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})