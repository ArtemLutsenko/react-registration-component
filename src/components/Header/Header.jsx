import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";

import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon";


const Header = ({ currentUser}) => {
  let  displaycurrentUserName = null
  if(currentUser) {
     if(currentUser.displayName){
      displaycurrentUserName = currentUser.displayName
    } else if(currentUser.email){
      displaycurrentUserName = currentUser.email
    }
  } 

  
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />        
      </div>   
      <div className = "currentUserDisplayName">       
         {!currentUser ? <p>Please SignIn</p> : <p>You login as   <span style = {{color: 'red'}}>{displaycurrentUserName}</span></p>} 
      </div>     
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
