//import React from 'react'
import { navLink } from "../data/data";

function Menu({ setspanVisible, setcoOrdinate }) {
  const navLinkList = navLink.map((link, index) => {
    function hightlightLink(event) {
      setspanVisible(true);
      console.log(event?.target?.getBoundingClientRect());
      const linkcoordinate = event?.target?.getBoundingClientRect();
      const ordinate = {
        height: `${linkcoordinate?.height}px`,
        width: `${linkcoordinate?.width}px`,

        transform: `translate(${linkcoordinate.left + window.scrollX}px,${
          linkcoordinate.top + window.scrollY
        }px)`,
      };

      setcoOrdinate((perv) => {
        console.log(perv);
        return ordinate;
      });
    }
    return (
      <>
        <li key={index}>
          <a
            onMouseEnter={hightlightLink}
            onMouseLeave={() => setspanVisible(false)}
            href=""
          >
            {link}
          </a>
        </li>
      </>
    );
  });

  return (
    <>
      <nav>
        <ul className="menu">{navLinkList}</ul>
      </nav>
    </>
  );
}

export default Menu;
