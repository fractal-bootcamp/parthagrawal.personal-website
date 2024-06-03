export function Header() {

    return (
        <header className="flex flex-row justify-between px-20 py-5">
            <h1 className="text-3xl font-bold">
                Parth's Site
            </h1>
            <nav>
                <ul className="flex flex-row gap-3">
                    <li>
                        <a href="/" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">About</a>
                    </li>
                    <li>
                        <a href="/portfolio" className="hover:underline">Portfolio</a>
                    </li>
                </ul>


            </nav>
        </header>
    )

}