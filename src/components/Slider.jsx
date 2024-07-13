import { useState,useId } from "react";
import './Slider.css'

const images = [
	'/src/imgs/slider/tateti.png',
	'/src/imgs/slider/cajas1970.png',
	'/src/imgs/slider/cajas1970-2.png',
	'/src/imgs/slider/hawaiian.png',
	'/src/imgs/slider/peliculas.png'
];

export default function Slider(){
    
    const [currentImage, setcurrentImage] = useState(0)
	const quantity = images?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(images) || quantity === 0) 
	return;

	const nextImage = () => {
		setcurrentImage(currentImage === quantity - 1 ? 0 : currentImage + 1);
	};

	const previousImage = () => {
		setcurrentImage(currentImage === 0 ? quantity - 1 : currentImage - 1);
	};

	return (
		<div className="flex justify-center items-center">
			<button 
            className="bg-bgColor2 transform rotate-180 h-max text-black font-bold rounded-full p-2 mr-2" 
            onClick={previousImage}>
				<img src="/src/imgs/slider/arrow.png" alt="arrow1" />
            </button>
			{
            images.map((image, index) =>{
				return(
					<div key={index} className={currentImage === index ? "slide active" : "slide"}>
						{
						currentImage === index && (
							<>
							<img 
							className="z-1 rounded-3xl relative h-[600px] object-cover" 
							key={index} 
							src={image} 
							alt="Image"
							
							/>
							<div className="text-center p-2 rounded-3xl text-xl mt-10 tracking-tight bg-cyan-200 text-black font-bold h-max">
								TIENDAS ONLINE, LANDINGS PAGES, SISTEMAS DE GESTION, VIDEOJUEGOS Y MUCHO MÁS!
							</div>
							</>
						)
						}
					</div>
				       );
			    })
            }
			<button 
            className="bg-bgColor2 h-max text-black font-bold rounded-full p-2 ml-2" 
            onClick={nextImage}>
				<img src="/src/imgs/slider/arrow.png" alt="arrow2" />
			</button>
		</div>
	);
    };