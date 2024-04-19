import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import mutpdf from './pdfs/Muthoot.pdf'


const Muthoot = () => {
  return (
    <div className='p-4'>
        <h2 className='font-semibold text-2xl'>Muthoot</h2>
     <PDFViewer pdfUrl={mutpdf} width={800}/>
     </div>

  )
}

export default Muthoot