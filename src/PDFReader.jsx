import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Page, Document, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import NavBar from './Home/Component/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const PDFReader = () => {
  const { id } = useParams()
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  const getBookById = () => {
    var config = {
      method: 'get',
      url: `${process.env.REACT_APP_PROD_URL}get/books/${id}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setData(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getBookById();
  }, [])



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
            file={`${data.url}`}
          />
          <Document
            file={`${data.url}`}
            onLoadSuccess={onDocumentLoadSuccess}

          >
            <div className='flex gap-10'>
              <div className=''>
                <Page size="A4" style={{maxWidth:"100px"}} className="w-10" pageNumber={pageNumber} scale={scale} />
              </div>
              <div className='hidden lg:block'>
                <Page pageNumber={pageNumber + 1} scale={scale} />
              </div>
            </div>

          </Document>
        </section>
      </div>
    </>
  );
};

export default PDFReader;
