import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import piramaldoc from './pdfs/PiramalDoctor.pdf'
import piramalpolicy from './pdfs/PiramalPolicy.pdf'

const Piramal = () => {
  return (
    <div>
        <h2>Piramal Doctor's Policy</h2>
     <PDFViewer pdfUrl={piramaldoc} />

     <h2>Piramal Policy</h2>
     <PDFViewer pdfUrl={piramalpolicy}/>
    </div> 
  )
}

export default Piramal