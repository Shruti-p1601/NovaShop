import React, { useState } from "react";
import styled from "styled-components";
import { products } from "../data";
import ProductCard from "./ProductCard";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

  // Filtering
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  // Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <Container>
      <FilterSection>
        <Button onClick={() => setCategory("all")}>All</Button>
        <Button onClick={() => setCategory("men")}>Men</Button>
        <Button onClick={() => setCategory("women")}>Women</Button>
      </FilterSection>

      <Grid>
        {currentProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Grid>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageBtn>
        ))}
      </Pagination>
    </Container>
  );
};

export default Products;

/* STYLES */

const Container = styled.div`
  padding: 40px;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 8px 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #1e1e2f;
  color: white;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Pagination = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const PageBtn = styled.button`
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.active ? "#1e1e2f" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "black")};
`;