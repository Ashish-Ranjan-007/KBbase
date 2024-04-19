import PDFViewer from './pdfutil/PDFViewer'
import abhipdf from './pdfs/Abhiloans.pdf'

const Abhiloans = () => {
  return (
    <div><PDFViewer pdfUrl={abhipdf}/></div>
  )
}

export default Abhiloans 