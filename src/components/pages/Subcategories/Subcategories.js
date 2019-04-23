import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Card, Image, Breadcrumb, Button } from 'semantic-ui-react';
import { getAllSubcategories } from '../../../actions';
import placeholder from '../../../assets/photo.png';

import SubcategoryForm from './SubcategoryForm/SubcategoryForm';

const Subcategories = ({ getAllSubcategories, subcategories, match }) => {
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    const fetchData = () => getAllSubcategories(match.params.id);
    fetchData();
  }, []);

  const renderCards = () =>
    subcategories.map(({ subTypeId, imagePath, name }) => (
      <Card centered raised key={subTypeId} as={NavLink} to={`/designers`}>
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
      <SubcategoryForm
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        typeId={match.params.id}
      />
      <div style={{ marginRight: '200px' }}>
        <Breadcrumb size="huge" className="addPadding">
          <Breadcrumb.Section as={NavLink} to="/">
            الرئيسية
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section as={NavLink} to="/categories">
            التصنيفات
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section>الأقسام الداخلية</Breadcrumb.Section>
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

const mapStateToProps = ({ subcategories }) => ({
  subcategories
});

const mapDispatchToProps = dispatch => ({
  getAllSubcategories: id => dispatch(getAllSubcategories(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subcategories);
