import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import upwpdf from './pdfs/Upwards.pdf'


const Upwards = () => {
  return (
    <div>
        <h2>Credit Policy Upwards</h2>
     <PDFViewer pdfUrl={upwpdf} />
     </div>

  )
}

export default Upwards