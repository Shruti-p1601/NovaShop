import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ item }) => {
  return (
    <Card>
      <Image src={item.img} />
      <Info>
        <Name>{item.name}</Name>
        <Price>₹{item.price}</Price>
        <Rating>
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon
              key={i}
              style={{
                color: i < Math.round(item.rating) ? "#fbc02d" : "#ddd",
                fontSize: 18,
              }}
            />
          ))}
        </Rating>
      </Info>
    </Card>
  );
};

export default ProductCard;

/* STYLES */

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const Info = styled.div`
  margin-top: 10px;
`;

const Name = styled.h3`
  font-size: 16px;
`;

const Price = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const Rating = styled.div`
  display: flex;
`;