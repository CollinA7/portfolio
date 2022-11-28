import React from "react";

function Nav() {
    const categories = [
        {
          name: 'about',
          description: 'blah'
        },
        {
          name: 'portfolio',
          description: 'blah 2'
        },
        {
          name: 'contact',
          description: 'how to contact me'
        },
        {
          name: 'resume',
          description: 'just a resume'
        }
    ]

    function categorySelected(name) {
        console.log(`${name}`)
    }

    return (
        <>
        <nav>
            <ul className="flex-row">            
            {categories.map((category) => (
                <li
                key = {category.name}
                >
                <span onClick={() => categorySelected(category.name)} >
                    {category.name}
                </span>
                </li>
            ))}
            </ul>
        </nav>
        </>
    )
}

export default Nav;