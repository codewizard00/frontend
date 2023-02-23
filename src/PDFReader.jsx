import React, { useState } from 'react';
import Loader from './Loader';
import { Page, Document, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import NavBar from './Home/Component/Header';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }




  return (
    <>
      <NavBar />
      <div className='App h-[90vh] overflow-hidden'>

        <Loader isLoading={isLoading} />
        <section
          id="pdf-section"
          className="flex flex-column items-center "
        >
          <ControlPanel
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            file="https://res.cloudinary.com/demo/image/upload/example_pdf.pdf"
          />
          <Document
            file="https://res.cloudinary.com/demo/image/upload/example_pdf.pdf"
            onLoadSuccess={onDocumentLoadSuccess}

          >
            <div className='flex gap-10'>
              <Page pageNumber={pageNumber} scale={scale} />
              <Page pageNumber={pageNumber+1} scale={scale} />
            </div>

          </Document>
        </section>
      </div>
    </>
  );
};

export default PDFReader;
