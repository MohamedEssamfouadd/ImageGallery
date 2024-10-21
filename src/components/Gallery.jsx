/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { image } from '../Images'
import LightBox from './LightBox'

const Gallery = () => {
  const [data,setdata]=useState({img:"",i:null})
  const ViewImage=(img,i)=>{
    setdata({img,i})
  }
  return (
    <>
    <div className="container-gallery">
      <h1>Images Gallery</h1>
        <div className="photo-gallery">
        {image.map((img,i)=>(
        <div key={i} className="images">
                <img onClick={()=>ViewImage(img,i)}  src={img} alt="" />
        </div>
            ))}
    </div>

        </div>
        {data.img&&
        <LightBox data={data} setdata={setdata}/>
        
        }
      
    </>
  )
}

export default Gallery