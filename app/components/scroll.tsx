import { motion, useScroll } from "framer-motion"
import "./scroll.css"



export const Scroll = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <h1>
                test
            </h1>
        </>
    )
}