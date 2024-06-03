import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => (
  <header>
    <h1 className = "text-3xl font-bold">
      Parth's Site
    </h1>
    <nav>
      <ul>
        <li>
          <a href = "/" className = "hover:underline">Home</a>
        </li>
        <li>
          <a href = "/about" className = "hover:underline">About</a>
        </li>
        <li>
          <a href = "/portfolio" className = "hover:underline">Portfolio</a>
        </li>
      </ul>

      
    </nav>
  </header>
)
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <Header />

     
    </div>
  );
}
