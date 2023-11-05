import { React, useState} from "react";
import { Link } from "react-router-dom";
//import { signOut } from "firebase/auth";
//import { auth } from "../../firebaseConfig";
import "./Header.css";
//import { useCart } from "react-use-cart";

const Header = () => {
  /* Cart*/
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);
  //const [setOpen] = useState(false);
  //const { totalItems } = useCart();
  const [user] = useState(null);
  const [tokenResult] = useState(null);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };



  /*const logout = async () => {
    await signOut(auth);
  };*/

  const homeLogoClick = async () => {
    window.location = "/";
  };

  return (
    <div className="Header">
      <div className="headerLogo">
        <img
          alt="Shop Logo"
          className="Logo"
          src="https://svgur.com/i/qzN.svg"
          onClick={homeLogoClick}
        />
      </div>
      <div className="headerMiddleSection">
        <div className="headerNavBar">
          <div className="headerLinkOne">
            <Link to="/category/padel" onClick={handleClick}>
              Padel
            </Link>
          </div>
          <div className="headerLinkTwo">
            <Link to="/category/import" onClick={handleClick}>
              Import
            </Link>
          </div>
          <div className="headerLinkThree">
            <Link to="/category/klær" onClick={handleClick}>
              Klær
            </Link>
          </div>
          <div className="headerLinkFour">
            <Link to="/category/sko" onClick={handleClick}>
              Sko
            </Link>
          </div>
          <div className="headerLinkFive">
            <Link to="/category/salg" onClick={handleClick}>
              Salg
            </Link>
          </div>
          <div className="headerLinkSix">
            <Link to="/category/tilbehør" onClick={handleClick}>
              Tilbehør
            </Link>
          </div>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <div>
            {tokenResult.claims.admin === true ? (
              <>
                <Link to="/crudAccess">CRUD</Link>
                <Link to="/adminPage">Admin</Link>
                {/*<a href="#">{user.email}</a>*/}
                {/*<a href="#" onClick={logout}>
                  Logg ut
                </a>*/}
              </>
            ) : (
              <>
                {/*<a href="#">{user.email}</a>
                <a href="#" onClick={logout}>
                  Logg ut
                </a>*/}
              </>
            )}
          </div>
        ) : (
          <div className="headerLoggInn">
            <Link to="/login">Logg inn</Link>
            <Link to="/registrer">Registrer</Link>
          </div>
        )}    
      </div>  
    </div>
  );
};

export default Header;
