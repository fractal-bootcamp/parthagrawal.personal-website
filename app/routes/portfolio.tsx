const CarouselCard = ({ source, currentIndex, prevIndex, nextIndex }: {source: string, currentIndex: number, prevIndex: number, nextIndex: number}) => {

    return (<div id={'#slide' + currentIndex} className="carousel-item w-full">
        <img src={source} className="carousel-item absolute h-full w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={'#slide' + prevIndex} className="btn btn-circle">❮</a>
            <a href={'#slide' + nextIndex} className="btn btn-circle">❯</a>
        </div>
    </div>)

}

export default function Portfolio() {

    return (
        <div>
            <h1 className="text-3xl font-bold" >
                Portfolio
            </h1>

            <ul className="list-disc">
                <li> <a href="https://samosaman.itch.io/salami-game" className="underline" >Salami Game</a> - drop salami on a guy's head. That's definitely all that happens.</li>
                <li> <a href="https://mmm.page/parth_agrawal.applied_cybernetics" className="underline">Lilypads are solar panels</a></li>
            </ul>
            <div className="carousel w-full">
                <CarouselCard source = {"salamigame.png"} currentIndex = {1} prevIndex = {3} nextIndex = {2}/>
                <CarouselCard source = {"lilypads.png"} currentIndex = {2} prevIndex = {1} nextIndex = {3}/>
                <CarouselCard source = {"exojoint.png"} currentIndex = {3} prevIndex = {2} nextIndex = {1}/>

            </div>
        </div>
    )

}