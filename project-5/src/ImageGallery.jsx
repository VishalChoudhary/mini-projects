import { useState } from "react";

function ImageGallery(){

    //Array of image file names
    const images = ['img1.jpg','img2.jpg','img3.jpg'];

    //Track which image is currently open in modal (null = none selected)
    const [ currentImage, setCurrentImage ] = useState(null);

    //Function to show next image (loops back to first when reaching end)
    const next = () =>{
        setCurrentImage((currentImage+1)%images.length);
    }

    //Function to show previous image (loops to last if on first image)
    const prev = () =>{
        setCurrentImage((currentImage-1+images.length)%images.length);
    }


    return(
        <div>
            {images.map((src,index)=>(
                <img 
                    key={index} // Each image needs a unique key when inside a list
                    src={src}  // Image source path
                    alt={`Images ${index}`}
                    height={100}
                    width={100}
                    style={{margin:'10px'}}
                    onClick={()=>setCurrentImage(index)}
                />
            ))}

            {/*If an image is selected (not null), show the modal */}
            {currentImage!==null && (
                <div className="modal" style={{
                position: 'fixed', top: 0, left: 0,
                width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.7)', // Dark overlay
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center'
                }}>
                    {/* Close modal button */}
                    <button onClick={()=>setCurrentImage(null)} style={{alignSelf: 'flex-end', marginRight:'20px'}}>X</button>
                
                    {/* Previous button */}
                    <button onClick={prev}>←</button>

                    {/* Show the selected image in large view */}
                    <img 
                        src={images[currentImage]}
                        alt=""
                        width={300}
                        style={{margin:'10px'}}
                    />
                
                    {/* Next button */}
                    <button onClick={next}>→</button>
                
                </div>
            )} 
        </div>
    );
}

export default ImageGallery;