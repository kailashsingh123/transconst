import { useEffect, useState } from 'react'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";

import image1 from "/image/bnr-1.jpg"
import image2 from "/image/bnr-2.jpg"
import image3 from "/image/bnr-3.jpg"

export function Carousel(props) {

    const [selectedImage, setSelectedImage] = useState(0)
    const [allImage, setAllImage] = useState([image1, image2, image3])

    useEffect(()=>{
        setInterval(()=>{
            setSelectedImage(selectedImage=> selectedImage < 2 ? selectedImage+1 : 0)
        },2000)
    },[])
    

    return (
        <>
          <div className='overflow-hidden relative h-full w-[100%]'>
            <div className='flex transition-transform ease-out duration-1000 mix-blend-overlay'>
            <img src={allImage[selectedImage]} alt="" className='' />
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4 text-white '>
            <button className='text-4xl' 
            onClick={ ()=> {
                if (selectedImage < allImage.length-1)
                setSelectedImage(selectedImage+1)
            }}
            ><IoArrowBackCircleOutline />
            </button>
            <button className='text-4xl'
            onClick={ ()=> {
                if (selectedImage > 0)
                setSelectedImage(selectedImage-1)
            }}
            ><IoArrowForwardCircleOutline />
            </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0 '>
                <div className='flex items-center justify-center gap-2 '>
                    {allImage.map((_, i) => (
                <div className={`transition-all w-3 h-3 bg-white rounded-full ${selectedImage === i ? "p-2" : "bg-opacity-20"} `} />
                    ))}
                </div>
            </div>
          </div>  
        </>
    )
}
