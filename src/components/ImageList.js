import React from 'react';

const ImageList = props => { 

  const renderImage = props.images.map(({ urls, description, id }) => <img src={urls.thumb} alt={description} key={id} />);
  
  return (
    <div>
      {renderImage}
    </div>
  )
  // return props.images.map(n => {
  //   return <div>{n}</div>
  // });
}

export default ImageList
