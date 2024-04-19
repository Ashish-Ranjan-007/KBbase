import React from 'react';
import { useState } from 'react';
import { pdfjs,Document,Page } from 'react-pdf';
import { StyleSheet, Font } from '@react-pdf/renderer'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import FontUbuntuRegular from './Ubuntu-Regular.ttf';
import FontUbuntuItalic from './Ubuntu-Italic.ttf';
import FontUbuntu700 from './Ubuntu-Bold.ttf';

Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      src: FontUbuntuRegular,
    },
    {
      src: FontUbuntuItalic,
      fontWeight: 'bold',
    },
    {
      src: FontUbuntu700,
      fontWeight: 800,
      fontStyle: 'italic',
    },
  ],
});

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function PDFViewer({pdfUrl}) {
  const [numPages, setNumPages] = useState();

  const onDocumentLoadSuccess = ({ numPages })=> {
    setNumPages(numPages);
  }

  const renderPages = () => {
    const pages = [];
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      pages.push(<Page wrap={true} key={pageNumber} pageNumber={pageNumber} />);
    }
    return pages;
  };

  const pages = numPages ? renderPages() : null;

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {pages}
      </Document>
     </div>
  );
}


export default PDFViewer;