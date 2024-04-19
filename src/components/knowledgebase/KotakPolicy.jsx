import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import kpolicy from './pdfs/policy-refresher-kotak.pdf'

const KotakPolicy = () => {
  return (
    <div>
        <h2>policy-refresher-kotak</h2>
        <PDFViewer pdfUrl={kpolicy} />
    </div>
    
  )
}

export default KotakPolicy