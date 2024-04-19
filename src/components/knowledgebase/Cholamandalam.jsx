import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import Cholapdf from './pdfs/Cholamandalam.pdf'


const Cholamandalam = () => {
  return (
    <div>
        <h2>Credit Policy Upwards</h2>
     <PDFViewer pdfUrl={Cholapdf} />
     </div>

  )
}

export default Cholamandalam