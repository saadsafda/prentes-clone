import React, { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <div className="header">
      <div className="logoWrapper">
      <Link to="/">
        <IconButton>
          <PinterestIcon />
        </IconButton>
        </Link>
      </div>
      <div className="homePageButton">
        <a href="/">Home</a>
      </div>
      <div className="followingButton">
        <a href="/">Following</a>
      </div>
      <div className="SearchWrapper">
        <div className="SearchBarWrapper">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" placeholder="Search" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}>
              {/*CAN BE LEFT EMPTY*/}
            </button>
          </form>
        </div>
      </div>
      <div className="IconsWrapper">
        <IconButton className="margin">
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
      </div>
      <div className="IconsWrappers">
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
        </div>
    </div>
  );
}
export default Header;