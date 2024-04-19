import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import finpdf from './pdfs/Finnable.pdf'


const Finnable = () => {
  return (
    <div className='p-4'>
        <h2 className='font-semibold text-2xl'>Finnable</h2>
     <PDFViewer pdfUrl={finpdf} width={800}/>
     </div>

  )
}

export default Finnable