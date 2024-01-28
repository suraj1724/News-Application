// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import axios from "axios";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuItems, setMenuItems] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/NewsType");
//         console.log(response.data, "response");
//         setMenuItems(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`bg-${isOpen ? "black" : "gray-800"} py-4`}>
//       <div className="container mx-auto ">
//         <div className="block lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className={`text-${isOpen ? "black" : "white"} focus:outline-none`}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>
//         </div>

//         <div class="flex justify-center items-center">
//           <ul className="hidden lg:flex flex-col lg:flex-row lg:items-center">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={closeMenu}
//                 className={`text-${
//                   isOpen ? "white" : "white"
//                 } hover:text-gray-300 my-2 lg:my-0 lg:mx-4 cursor-pointer`}
//               >
//                 {item}
//               </li>
//             ))}

//             <OverlayTrigger
//               key="bottom-start"
//               trigger="click"
//               placement="bottom-start"
//               overlay={
//                 <Tooltip id={`tooltip-bottom`}>
//                 <input type="text" placeholder="Search..." />
//                 </Tooltip>
//               }
//             >
//               <div>
//                 <FontAwesomeIcon icon={faSearch} className="text-white"/>
//               </div>
//             </OverlayTrigger>
//           </ul>
//         </div>

//         {isOpen && (
//           <div
//             className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
//             onClick={closeMenu}
//           ></div>
//         )}
//         <ul
//           className={`lg:hidden ${
//             isOpen ? "fixed" : "hidden"
//           } top-0 left-0 bg-gray-800 w-4/5 lg:w-80 h-screen transition-transform transform ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={closeMenu}
//               className={`text-white hover:text-gray-300 my-2 lg:my-0 lg:mx-4 cursor-pointer`}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/NewsType");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`bg-${isOpen ? "black" : "gray-800"} py-4`}>
      <div className="container mx-auto ">
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className={`text-${isOpen ? "black" : "white"} focus:outline-none`}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <ul className="hidden lg:flex flex-col lg:flex-row lg:items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={closeMenu}
                className={`text-${
                  isOpen ? "white" : "white"
                } hover:text-gray-300 my-2 lg:my-0 lg:mx-4 cursor-pointer`}
              >
                {item}
              </li>
            ))}

            <OverlayTrigger
              key="bottom-start"
              trigger="click"
              placement="bottom-start"
              overlay={
                <Tooltip id={`tooltip-bottom`}>
                  <input type="text" placeholder="Search..." />
                </Tooltip>
              }
            >
              <div>
                <FontAwesomeIcon icon={faSearch} className="text-white"/>
              </div>
            </OverlayTrigger>
          </ul>
        </div>

        <Offcanvas show={isOpen} onHide={closeMenu} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="flex flex-col items-start">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={closeMenu}
                  className={`text-black hover:text-black-300 my-2 cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navbar;
