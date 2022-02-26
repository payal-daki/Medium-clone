import "./openBlog.css";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { Popup } from "../popUp/popup";
import { DeletePopup } from "../popUp/deletePopup";

export const OpenBlog = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(`http://localhost:3002/blogs/${id}`)
      .then((d) => d.json())
      .then((res) => setData(res));
  };

  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="container">
      {/* left part */}
      <div className="leftDiv"> Navbar</div>

      {/* middle part */}
      <div className="middleDiv">
        <div className="topMostDiv">
          <div className="user">U</div>
          <div>
            <div className="userName">username</div>
            <div>{data.date}</div>
          </div>
        </div>
        <div className="blogBody">
          <p className="blogTitle">{data.title}</p>
          <p className="blogBody">{data.body}</p>
        </div>

        <div className="imgDiv">
          <div className="commentDiv">
            <span>
              <img
                src="https://www.pngitem.com/pimgs/m/21-212930_transparent-square-speech-bubble-png-transparent-instagram-comment.png"
                alt=""
              />
            </span>
          </div>
          <div className="socialIcons">
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
              alt=""
            />
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png"
              alt=""
            />
            <img
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
              alt=""
            />
            <img
              src="https://icon-library.com/images/link-png-icon/link-png-icon-1.jpg"
              alt=""
            />
            
              <button onClick={togglePopup}>
                <img
                  src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-delete-vector-icon-png-image_4236653.jpg"
                  alt=""
                />
              </button>
            
              {isOpen && <Popup handleClose={togglePopup} content={<div><DeletePopup /> </div>}/>}

          </div>
        </div>

        <div className="moreFrom">
          <p>More from username</p>
        </div>
        <div className="bottomText">
          Love podcasts or audiobooks? Learn on the go with our new app.{" "}
          <button>Try knowable</button>
        </div>
      </div>

      {/* right part */}
      <div className="rightDiv">Right</div>
    </div>
  );
};
