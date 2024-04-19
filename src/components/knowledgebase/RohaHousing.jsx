import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import rohapdf from './pdfs/RohaHousing.pdf'

const RohaHousing = () => {
  return (
    <div>
    <h2>ROHA Housing</h2>
    <PDFViewer pdfUrl={rohapdf} />
    </div>
  )
}

export default RohaHousing

