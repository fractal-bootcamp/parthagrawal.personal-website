import { ReactElement, ReactNode, useState } from "react"
import { Header } from "~/components/header"



const pictures = ["salamigame.png", "lilypads.png", "exojoint.png"]

export function prevIndex(index: number, length: number) {
    if (index == 0) {
        return length - 1
    }
    return (index - 1) % length
}
export function nextIndex(index: number, length: number) {
    return (index + 1) % length
}


interface CarouselItemProps {
    index: number,
    carouselLength: number,
    picture: string
}

const CarouselItem = ({ index, carouselLength, picture }: CarouselItemProps): ReactElement => {

    return (
        <div id={`slide${index}`} className="carousel-item relative w-full justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prevIndex(index, carouselLength)}`} className="btn btn-circle">❮</a>
                <a href={`#slide${nextIndex(index, carouselLength)}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}

function pictureToCarouselItem(picture: string, index: number): ReactElement {
    const carouselLength = pictures.length
    return <CarouselItem key={index} index={index} carouselLength={carouselLength} picture={picture} />
}

export default function Portfolio() {

    return (



        <div>
            <Header />


            <div className="flex justify-center w-screen">



                {/* Question: how do I add a variable (srcArray) to the carousel div that the carouselItem inherits  */}

                <div className="carousel w-1/2" >

                    {pictures.map(pictureToCarouselItem)}

                    {/* <CarouselItem id={1} prevID={3} nextID={2} src="salamigame.png" />

                    <CarouselItem id={2} prevID={1} nextID={3} src="lilypads.png" />

                    <CarouselItem id={3} prevID={2} nextID={1} src="exojoint.png" /> */}



                </div>

            </div>


        </div>


    )

}