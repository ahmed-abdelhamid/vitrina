import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Card, Image, Breadcrumb, Button } from 'semantic-ui-react';
import CategoryForm from './CategoryForm/CategoryForm';
import { getCategories } from '../../../actions';

import placeholder from '../../../assets/photo.png';

const Categories = ({ getCategories, categories }) => {
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    const fetchData = () => getCategories();
    fetchData();
  }, []);

  const renderCards = () =>
    categories.map(({ typeId, name, imagePath }) => (
      <Card
        centered
        raised
        key={typeId}
        as={NavLink}
        to={`/categories/${typeId}/subcategories`}
      >
        <Image
          src={
            !imagePath || imagePath === 'undefined' ? placeholder : imagePath
          }
        />
        <Card.Content>
          <Card.Header content={name} textAlign="center" />
        </Card.Content>
      </Card>
    ));

  return (
    <React.Fragment>
      <CategoryForm open={modalOpened} onClose={() => setModalOpened(false)} />
      <div style={{ marginRight: '200px' }}>
        <Breadcrumb size="huge" className="addPadding">
          <Breadcrumb.Section as={NavLink} to="/">
            الرئيسية
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section>التصنيفات</Breadcrumb.Section>
        </Breadcrumb>

        <Container>
          <Card.Group itemsPerRow={5}>{renderCards()}</Card.Group>
          <Button
            circular
            positive
            size="massive"
            icon="plus"
            floated="left"
            style={{ margin: '25px' }}
            onClick={() => setModalOpened(true)}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
