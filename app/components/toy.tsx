import "./scroll.css"

var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
    // Get the styles (properties and values) for the root
    if (r) var rs = getComputedStyle(r); else return;

    // Alert the value of the --blue variable
    alert("The value of --blue is: " + rs.getPropertyValue('--value'));
}



export const Toy = () => {

    return (
        <>

            <div className="radial-progress" style={{ '--value': 70 } as React.CSSProperties} role="progressbar">70%</div>

        </>
    )
}