import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

// Info overlay
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  pointer-events: none;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    pointer-events: all;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  pointer-events: all;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Product = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showNotification = (msg) => {
    setMessage(msg);
    setOpen(true);
  };

  return (
    <>
      <Container>
        <Circle />
        <Image src={item.img} alt="product" />

        <Info>
          <Icon onClick={() => showNotification("Added to cart 🛒")}>
            <ShoppingCartOutlinedIcon />
          </Icon>

          <StyledLink to={`/product/${item.id}`}>
            <Icon>
              <SearchOutlinedIcon />
            </Icon>
          </StyledLink>

          <Icon onClick={() => showNotification("Added to wishlist ❤️")}>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
      </Container>

      {/* Modern Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Product;