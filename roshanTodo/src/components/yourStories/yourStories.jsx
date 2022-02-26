import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Drafts } from "../getStories/drafts";
import { Published } from "../getStories/published";
import { Responses } from "../getStories/responces";
import { Navbar_login } from "../leftNavbar/nav";
import "./yourStories.css"

export const YourStories = () => {



  return (
    <div className="container">

      {/* left part */}
      <div className="leftDiv"> <Navbar_login /></div>

      {/* middle part */}
      <div className="middleDiv">
        <div className="topDiv">
          
            <p>Your stories</p>
          
          <div className="btnDiv">
           <Link to="/write"> <button className="firstBtn">Write a story</button></Link> <button className="secondBtn">Import a story</button>
          </div>
        </div>
        <div className="linkDiv">
            <div>
            <Link style={{textDecoration : "none", color: "black"}} to="stories/draft">Drafts</Link>
            </div>

            <div>
            <Link style={{textDecoration : "none", color: "black"}}  to="stories/publish">Published </Link>
            </div>

            <div>
            <Link style={{textDecoration : "none", color: "black"}}  to="stories/responce">Responses</Link>

            </div>
        </div>
        <div className="changingDiv">
            <Routes>
                <Route path="stories/draft" element={<Drafts />}></Route>
                <Route path="stories/publish" element={<Published />}></Route>
                <Route path="stories/responce" element={<Responses />}></Route>
            </Routes>
        </div>
      </div>

      {/* right part */}
      <div className="rightDiv">Right</div>
    </div>
  );
};
