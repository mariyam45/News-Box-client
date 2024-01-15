import React from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import BG from "../../../assets/bg.png";
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      {/* -----login options---- */}
      <div className="login_options">
        <h2>Login With</h2>
        <Button variant="outline-primary" className="my-2">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github{" "}
        </Button>
      </div>
      {/* -----social medias------ */}
      <div className="social_media my-5 ">
        <h2>Find Us</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Morbi leo risus
          </ListGroup.Item>
        </ListGroup>
      </div>
      {/* -------qzone--------   */}
      <Qzone></Qzone>
      {/* -----  */}

      <div className="bg_text text-center  my-5 text-light">
        <img src={BG} alt="" />
        <div className="texts">
          <h3 className="mb-4">Create an Amazing Newspaper</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non
            quam cumque, adipisci doloribus temporibus iure! Ad, quibusdam!
            Aliquam, facere?
          </p>
          <Button variant="danger" className="mt-3">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
