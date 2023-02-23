import React from 'react';

const Loader = ({isLoading}) => {
  if(!isLoading) return null;
  return (
    <div id="loader" className="d-flex justify-content-center align-items-center flex-column">
      <img src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674493289/Premsudha/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE_%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE_9_szq4sd.jpg" alt="loader" className="mb-5 App-logo" />
      <p>Loading...</p>
    </div>
  )
}

export default Loader
