import React, { useEffect, useState, useRef } from 'react';
import { usePdf } from "react-pdf-js";
import "./styles.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';




const PDFReader = () => {
  const { id } = useParams();
  const [data, setData] = useState('');

  const getData = () => {
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
  console.log(data);

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <iframe className='w-full h-[100vh]' src={data.url + "#toolbar=0"} />
    </div>
  );
};

export default PDFReader;
