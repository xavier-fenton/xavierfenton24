// let iframe = document.getElementById('iframeClass')
// // async function waitForDoc(iframe) {
// //   console.log(await iframe.contentDocument)
// //   // if (
// //   //   (await iframe.contentDocument) &&
// //   //   (await iframe.contentDocument.title) === '#document'
// //   // ) {
// //   //   console.log(iframe)
// //   //   console.log('Iframe contains a document with title "#document"')
// //   // } else {
// //   //   console.log(iframe.contentDocument)
// //   //   console.error('Iframe does not contain a document with title "#document"')
// //   // }
// // }
// // waitForDoc(iframe)

// // window.onerror = function (message, source, lineno, colno, error) {
// //   console.error(
// //     'Error occurred:',
// //     message,
// //     'at',
// //     source,
// //     'line',
// //     lineno,
// //     'column',
// //     colno
// //   )
// //   // Handle the error as needed
// //   return true // Prevent the default browser error handling
// // }

// function searchForStringInDOM(targetString, node) {
//   console.log(node, 'node log')
//   if (
//     node.nodeType === Node.TEXT_NODE &&
//     node.nodeValue.includes(targetString)
//   ) {
//     console.log('Found:', targetString, 'in text node:', node.nodeValue)
//     // You can take further actions if needed
//   }

//   for (let childNode of node.childNodes) {
//     searchForStringInDOM(targetString, childNode)
//   }
// }

// // Start the search from the document body
// searchForStringInDOM(
//   '#document (chrome-error://chromewebdata/)',
//   document.body
// )