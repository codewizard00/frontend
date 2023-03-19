import React, { useEffect, useState,useRef } from 'react';
import { usePdf } from "react-pdf-js";
import "./styles.scss";
import { useParams } from 'react-router-dom';




const PDFReader = () => {
  const { id } = useParams()
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const renderPagination = (page, pages) => {
    if (!pages) {
      return null;
    }
    let previousButton = (
      <button className="previous" onClick={() => setPage(page - 1)}>
        <i className="fa fa-arrow-left" /> Previous
      </button>
    );
    if (page === 1) {
      previousButton = (
        <button className="previous disabled">
          <i className="fa fa-arrow-left" /> Previous
        </button>
      );
    }
    let nextButton = (
      <button className="next" onClick={() => setPage(page + 1)}>
        Next <i className="fa fa-arrow-right" />
      </button>
    );
    if (page === pages) {
      nextButton = (
        <button className="next disabled" id="next">
          Next <i className="fa fa-arrow-right" />
        </button>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };

  const canvasEl = useRef(null);
  const url = "https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf";

  console.log("usePdf", usePdf);
  const [loading, numPages] = usePdf({
    file: url,
    page,
    canvasEl
  });

  const spinner = () => {
    return <div className="lcSpinner" />;
  };

  const loadingDIV = loading ? spinner() : null;

  useEffect(() => {
    setPages(numPages);
  }, [numPages]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {loadingDIV}
        <canvas ref={canvasEl} />
        {renderPagination(page, pages)}
      </div>
    </div>
  );
};

export default PDFReader;
