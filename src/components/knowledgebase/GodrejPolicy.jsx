import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import gpdf from './pdfs/GodrejPolicy.pdf'
import{Font} from '@react-pdf/renderer'

const GodrejPolicy = () => {
  return (
    <div className='gray-8'>
        <PDFViewer pdfUrl={gpdf} />
    </div>
  )
}

export default GodrejPolicy 
