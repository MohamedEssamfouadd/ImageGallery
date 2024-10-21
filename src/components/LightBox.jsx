/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { image } from '../Images';
import { LuLoader2 } from "react-icons/lu";
const LightBox = ({data,setdata}) => {
    const ref=useRef()

useEffect(()=>{
    let handleclick=(e)=>{
        if (e.target==ref.current) {
            setdata({img:"",i:0})
            
        }

    }

    document.addEventListener("mousedown",handleclick)
    document.addEventListener("keydown",detectkey,true)

},[])
const detectkey=(e)=>{
    if (e.key=="Escape") {
        setdata({img:"",i:0})
    }   
}
    const imgaction=(action)=>{
        let slide=document.querySelector(".slide")
        let animation=document.querySelector(".animation")
        if (action=="next-img") {  
            //Right to Light 
           slide.classList.add("fade-out")
           animation.classList.remove("fade-out")

           setTimeout(()=>{
               setdata({img:image[data.i-1],i:data.i-1}) 
               animation.classList.add("fade-out")
               slide.classList.remove("fade-out")
               
               if(data.i<=0){
                   setdata({img:image[data.i=image.length-1],i:data.i=image.length-1}) 
                }
            },1200)

        }
        if (action=="prev-img") {
            //Left to Right
            slide.classList.add("fade-out")
            animation.classList.remove("fade-out")
            setTimeout(()=>{
                setdata({img:image[data.i+1],i:data.i+1})
                animation.classList.add("fade-out")
                slide.classList.remove("fade-out")

                if(data.i>=image.length-1){
                    setdata({img:image[data.i=0],i:data.i=0}) 
                }
            },1200)

        }

    }
  return (
    <>
    <div ref={ref} className="Light-container">
        <div  className="response-img">

        <div className="img-container">
            <div className="animation fade-out">
                <div className="icon">
                <LuLoader2 />

                </div>
                </div> 
            <img  className='slide'src={data.img} alt="" />
            <button onClick={()=>imgaction("next-img")} className='next'><IoIosArrowForward /></button>
            <button onClick={()=>imgaction("prev-img")}  className='previous'><IoIosArrowBack /></button>
        </div>
            </div>
    </div>
           

    </>
  )
}

export default LightBox