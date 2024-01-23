// eslint-disable-next-line no-unused-vars
import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image className="author_img" src={author.img} roundedCircle />
          <div className="author_idnt ps-3 flex-grow-1 ">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("YYYY-MM-D , h:mm:ss a")}
              </small>
            </p>
          </div>
          <div className="iconCard">
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted ">
          <div className="txt_footer d-flex">
            <div className="flex-grow-1">
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={<FaStar></FaStar>}
                readonly
              />
              <span className="ms-1">{rating?.number}</span>
            </div>
            <div>
              {" "}
              <FaEye className="me-1" />
              {total_view}
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
