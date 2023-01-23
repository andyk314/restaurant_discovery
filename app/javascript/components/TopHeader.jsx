import React, { useState, useMemo } from 'react';
import { Row, Form, Col, Navbar, InputGroup } from 'react-bootstrap';
import { debounce } from 'lodash';

const TopHeader = ({ onSearchChange }) => {
  const [search, setSearch] = useState();

  debouncedSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        onSearchChange(searchTerm);
      }, 1000),
    []
  );

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    debouncedSearch(search);
  };

  return (
    <Row className="m-1">
      <Navbar bg="light" expand="lg">
        <Col md="8" sm="6" xs="12" className="px-3">
          <Navbar.Brand>AllTrails at lunch</Navbar.Brand>
        </Col>
        <Col md="4" sm="6" xs="12">
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-end"
          >
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                aria-label="Search"
                className="me-2"
                onChange={handleSearch}
                placeholder="Search Restaurants...."
                type="search"
              />
            </InputGroup>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    </Row>
  );
};

export default TopHeader;
