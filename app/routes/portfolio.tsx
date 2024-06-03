import { ReactElement, ReactNode, useState } from "react"
import { Header } from "~/components/header"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const projects: Project[] = [
    {
        title: "Salami Game",
        picture: "salamigame.png",
        description: "Definitely just a game about dropping salami on a guy's head",
        link: "https://samosaman.itch.io/salami-game"

    },
    {
        title: "Lilypads are solar panels",
        picture: "lilypads.png",
        description: "explorations in nature and cybernetics",
        link: "https://mmm.page/parth-agrawal/applied-cybernetics"

    },
]


// const pictures = ["salamigame.png", "lilypads.png", "exojoint.png"]

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
    title: string,
    picture: string,
    description: string,
    link: string
}

const CarouselItem = ({ index, carouselLength, title, picture, description, link }: CarouselItemProps): ReactElement => {

    return (
        <div id={`slide${index}`} className="carousel-item relative w-full justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <a href={`${link}`}><button className="btn btn-primary">Link to Project</button></a>
                    </div>
                </div>
            </div>                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prevIndex(index, carouselLength)}`} className="btn btn-circle">❮</a>
                <a href={`#slide${nextIndex(index, carouselLength)}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}

// function pictureToCarouselItem(picture: string, index: number): ReactElement {
//     const carouselLength = pictures.length
//     return <CarouselItem key={index} index={index} carouselLength={carouselLength} picture={picture} />
// }

interface Project {
    title: string, picture: string, description: string, link: string
}

function mapProjectToCarouselItem(project: Project, index: number): ReactElement {
    const carouselLength = projects.length
    return <CarouselItem
        key={index}
        index={index}
        carouselLength={carouselLength}
        title={project.title}
        picture={project.picture}
        description={project.description}
        link={project.link}
    />

}

export default function Portfolio() {

    return (



        <div>
            <Header />


            <div className="flex justify-center w-screen">



                {/* Question: how do I add a variable (srcArray) to the carousel div that the carouselItem inherits  */}

                <div className="carousel w-1/2" >

                    {projects.map(mapProjectToCarouselItem)}

                    {/* {pictures.map(pictureToCarouselItem)} */}

                    {/* <CarouselItem id={1} prevID={3} nextID={2} src="salamigame.png" />

                    <CarouselItem id={2} prevID={1} nextID={3} src="lilypads.png" />

                    <CarouselItem id={3} prevID={2} nextID={1} src="exojoint.png" /> */}



                </div>

            </div>


        </div>


    )

}