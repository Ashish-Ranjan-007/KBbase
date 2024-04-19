import PDFViewer from './pdfutil/PDFViewer'
import pdfUrl from './pdfs/faircent.pdf'
import pdfUrl2 from './pdfs/faircent2.pdf'
import pdfUrl3 from './pdfs/faircent3.pdf'

const Faircent = () => {
  return (<>
    <div><PDFViewer pdfUrl={pdfUrl}/></div>
    <div><PDFViewer pdfUrl={pdfUrl2}/></div>
    <div><PDFViewer pdfUrl={pdfUrl3}/></div>
    </>
  )
}

export default Faircent