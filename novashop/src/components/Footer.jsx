import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #fff6f8;
  padding: 60px 80px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "40px 20px" })}
`;

const Column = styled.div`
  flex: 1;
  padding: 10px 20px;
`;

const Logo = styled.h1`
  color: #ff4d6d;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fde2e7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff4d6d;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ff4d6d;
    color: white;
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  color: #666;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ff4d6d;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #666;
`;

const Payment = styled.img`
  width: 60%;
  margin-top: 20px;
`;

const Bottom = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #f1c6cf;
  color: #888;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        {/* LEFT */}
        <Column>
          <Logo>NOVA.</Logo>
          <Desc>
            Discover premium fashion and lifestyle products curated
            just for you. Elevate your style with modern elegance.
          </Desc>

          <SocialContainer>
            <SocialIcon href="#"><FacebookIcon /></SocialIcon>
            <SocialIcon href="#"><InstagramIcon /></SocialIcon>
            <SocialIcon href="#"><TwitterIcon /></SocialIcon>
            <SocialIcon href="#"><PinterestIcon /></SocialIcon>
          </SocialContainer>
        </Column>

        {/* CENTER */}
        <Column>
          <Title>Useful Links</Title>
          <List>
            <StyledLink to="/"><ListItem>Home</ListItem></StyledLink>
            <StyledLink to="/cart"><ListItem>Cart</ListItem></StyledLink>
            <StyledLink to="/products/man"><ListItem>Man Fashion</ListItem></StyledLink>
            <StyledLink to="/products/woman"><ListItem>Woman Fashion</ListItem></StyledLink>
            <StyledLink to="/products/accessories"><ListItem>Accessories</ListItem></StyledLink>
            <StyledLink to="/login"><ListItem>My Account</ListItem></StyledLink>
            <StyledLink to="/orders"><ListItem>Order Tracking</ListItem></StyledLink>
            <StyledLink to="/wishlist"><ListItem>Wishlist</ListItem></StyledLink>
            <StyledLink to="/terms"><ListItem>Terms</ListItem></StyledLink>
          </List>
        </Column>

        {/* RIGHT */}
        <Column>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon style={{ marginRight: "10px", color: "#ff4d6d" }} />
            622 Dixie Path, South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: "10px", color: "#ff4d6d" }} />
            +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ marginRight: "10px", color: "#ff4d6d" }} />
            contact@nova.dev
          </ContactItem>

          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Column>
      </Container>

      <Bottom>
        © 2026 NOVA. All Rights Reserved.
      </Bottom>
    </>
  );
};

export default Footer;