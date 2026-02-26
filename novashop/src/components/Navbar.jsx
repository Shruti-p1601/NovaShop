import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;
  background: linear-gradient(to right, #ffffff, #fff1f4);
  box-shadow: 0 2px 10px rgba(255, 77, 109, 0.08);
  position: sticky;
  top: 0;
  z-index: 999;
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 0 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0 20px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #444;
  font-weight: 500;
  position: relative;
  transition: 0.3s;

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: #ff4d6d;
    transition: 0.3s ease;
  }

  &:hover {
    color: #ff4d6d;
  }

  &:hover:after {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f3cdd5;
  padding: 6px 10px;
  border-radius: 20px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
  color: #ff4d6d;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        {/* LEFT SIDE LINKS */}
        <Left>
          <NavLink to="/products/man">Men</NavLink>
          <NavLink to="/products/woman">Women</NavLink>
          <NavLink to="/products/accessories">Accessories</NavLink>
        </Left>

        {/* CENTER LOGO */}
        <Center>
          <NavLink to="/">
            <Logo>NOVA</Logo>
          </NavLink>
        </Center>

        {/* RIGHT SIDE */}
        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "#ff4d6d", fontSize: 18 }} />
          </SearchContainer>

          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Sign In</NavLink>

          <NavLink to="/cart">
            <Badge badgeContent={4} sx={{ "& .MuiBadge-badge": { backgroundColor: "#ff4d6d" } }}>
              <ShoppingCartOutlinedIcon style={{ color: "#444" }} />
            </Badge>
          </NavLink>
        </Right>

      </Wrapper>
    </Container>
  );
};

export default Navbar;