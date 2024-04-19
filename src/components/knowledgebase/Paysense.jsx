import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import paypdf from './pdfs/Paysense.pdf'


const Paysense = () => {
  return (
    <div className='p-4'>
        <h2 className='font-semibold text-2xl'>Paysense</h2>
     <PDFViewer pdfUrl={paypdf} width={800}/>
     </div>

  )
}

export default Paysense