import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";
import { Header } from "~/components/header";
import { Scroll } from "~/components/scroll";
import { motion, useScroll } from "framer-motion"
import App from "~/root";
import { MyComponent } from "~/components/framer";
import { Toy } from "~/components/toy";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// const Header = () => (
//   <header>
//     <h1 className = "text-3xl font-bold">
//       Parth's Site
//     </h1>
//     <nav>
//       <ul>
//         <li>
//           <a href = "/" className = "hover:underline">Home</a>
//         </li>
//         <li>
//           <a href = "/about" className = "hover:underline">About</a>
//         </li>
//         <li>
//           <a href = "/portfolio" className = "hover:underline">Portfolio</a>
//         </li>
//       </ul>


//     </nav>
//   </header>
// )
export default function Index() {

  return (
    <div className="p-10 g-3" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <Scroll />
      <Toy />
      <Header />

      <About />


    </div>
  );
}
