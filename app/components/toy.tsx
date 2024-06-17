import { useScroll, useTransform, motion } from "framer-motion";
import "./scroll.css"
import { useEffect } from "react";


export const Toy = () => {

    const { scrollYProgress } = useScroll()
    const radialProgress = useTransform(
        scrollYProgress, [0, 1], [0, 100]
    )
    console.log(scrollYProgress)
    const thing = Math.floor(scrollYProgress.get() * 100)

    console.log('thing:', thing)



    return (
        <>

            <motion.div className="radial-progress" style={{ '--value': radialProgress } as React.CSSProperties} role="progressbar">70%</motion.div >
            <div>
                scrollYProgress: {scrollYProgress.get()}
                thing: {thing}

            </div>
        </>
    )
}