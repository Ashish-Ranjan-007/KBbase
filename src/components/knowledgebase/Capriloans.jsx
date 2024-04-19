import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import cappdf from './pdfs/Capriloans.pdf'


const Capriloans = () => {
  return (
    <div className='p-4'>
        <h2 className='font-semibold text-2xl'>Capriloans</h2>
     <PDFViewer pdfUrl={cappdf} width={800}/>
     </div>

  )
}

export default Capriloans