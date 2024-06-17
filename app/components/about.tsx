import { Header } from "~/components/header"
import { MyComponent } from "./framer"

export default function About() {
    return (
        <div className="">
            <MyComponent />



            <p>
                I'm Parth! I like nature and creating things.

            </p>
            <div className="divider divider-primary">Today</div>

            <ul className="list-disc m-5">
                <li>I've built startups in AI, logistics, and healthcare.</li>
                <li>Right now I'm reading Slow Birding, which is about how cool it is to study and learn about birds in your own backyard.</li>
                <li>I'm getting into playing basketball</li>
                <li>Right now I'm doing the Fractal Coding Bootcamp. I'd like to be a product engineer at an early stage startup - shipping and selling products aggressively.</li>
                <li>I handwrite letters to friends and strangers every week. Everyone gets a letter, every single week. <a href="https://parthagrawal.com/letters" className="underline">You can get one too. Yes you too fellow bootcampers I'm doing this while in bootcamp too, defo sign up!!!</a></li>
            </ul>

            <div className="divider divider-primary">Socials</div>

            <ul>

                <li>
                    <a href="https://www.linkedin.com/in/productparth/" className="hover:underline">My LinkedIn (okay)</a>
                </li>
                <li>
                    <a href="https://github.com/parth-agrawal" className="hover:underline">My Github (better)</a>
                </li>
                <li>
                    <a href="https://x.com/mr_samosaman" className="hover:underline">My Twitter (best)</a>
                </li>
                <li>
                    <a href="https://parthagrawal.com" className="hover:underline">My real personal website (best)</a>
                </li>


            </ul>

            <div className="divider divider-primary">Me</div>

            <div className="flex justify-center">

                <img src="/parth.jpeg" alt="Parth" style={{
                    height: 300,
                }}></img>
            </div>
        </div >
    )
}