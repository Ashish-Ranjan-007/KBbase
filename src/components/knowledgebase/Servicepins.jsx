// import React from 'react'
// import {xlsheet} from './pdfs/servicepins.xlsx'
// import {OutTable, ExcelRenderer} from 'react-excel-renderer';

// const Servicepins = () => {
   
//     let fileObj = xlsheet.files[0];
//     ExcelRenderer(fileObj,(err,resp)=>{
// if(err){
//     console.log(err);
// }
// else{
//     console.log(xlsheet)
//     this.setState(
//         {
//             cols:resp.cols,
//             rows:resp.rows
//         }
//     );
// }

//     })

//   return (
//    <>
//     <OutTable data={this.state.rows} colums={this.state.cols}
//     tableClassname="Exceltable" tableHeaderRowClass="heading"/>

//    </>
//   )
// }

// export default Servicepins

import React from 'react'
import PDFViewer from './pdfutil/PDFViewer'
import serxl from './pdfs/Servicepins.pdf'
import finxl from './pdfs/finnable-pincodes.pdf'
import gzbxl from './pdfs/Ghaziabad-pincodes.pdf'


const Servicepins = () => {
  return (
    <>
    <div className='p-4'>
    <h2 className='font-semibold text-2xl'>Service PINCODES</h2>
     <PDFViewer pdfUrl={serxl} width={800}/>
     </div>
     {/* <h2 className='font-semibold'>Finnable PINCODE</h2>
     <PDFViewer pdfUrl={finxl} width={800}/>
     </div> */}
     <div>
     <h2 className='font-semibold'>GHAZIABAD PINCODE</h2>
     <PDFViewer pdfUrl={gzbxl} width={800}/>
     </div>
     </>

  )
}

export default Servicepins