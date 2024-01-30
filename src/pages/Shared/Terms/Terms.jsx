import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Condition</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo totam
        soluta cupiditate quidem dicta vel, neque doloribus corporis adipisci
        beatae quaerat reprehenderit facilis quis, harum nesciunt! Autem iure
        laboriosam aperiam deleniti minus libero, fuga est quasi repudiandae
        nesciunt necessitatibus quia explicabo deserunt quaerat, iste voluptas
        natus optio dolores non sapiente tempora sint nulla? Soluta laborum
        pariatur fugiat cumque itaque.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Terms;
