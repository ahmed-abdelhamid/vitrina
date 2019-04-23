import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { Container, Card, Image, Breadcrumb, Grid } from 'semantic-ui-react';
import {
  getSubcategories,
  getCategories,
  getDesigners,
  sortDesignersByDate,
  sortDesignersByLikes,
  getDesignersByType,
  getAllDesigners
} from '../../../actions';
import placeholder from '../../../assets/placeholder.png';

class Designers extends Component {
  state = {
    selectedCategoryId: '1',
    selectedSubcategoryId: '1'
  };

  componentDidMount() {
    this.props.getCategories();
    this.props.getSubcategories();
    this.props.getDesigners();
  }

  sortDesigners(value) {
    if (value === '1') {
      this.props.sortDesignersByLikes();
    } else {
      this.props.sortDesignersByDate();
    }
    this.setState(() => ({ selectedCategoryId: 0, selectedSubcategoryId: 0 }));
  }

  renderCards() {
    return this.props.designers.map(
      ({ accountId, imageProfile, firstName, lastName, creationdate }) => (
        <Card
          centered
          raised
          key={accountId}
          as={NavLink}
          to={`/designer/${accountId}`}
        >
          <Image src={imageProfile || placeholder} />
          <Card.Content>
            <Card.Header
              content={`${firstName} ${lastName}`}
              textAlign="center"
            />
            <Card.Meta
              content={`Joined at ${creationdate}`}
              textAlign="center"
            />
          </Card.Content>
        </Card>
      )
    );
  }

  render() {
    const categoryOptions = this.props.categories.map(({ typeId, name }) => ({
      label: name,
      value: typeId
    }));

    const subcategoriesOptions = this.props.subcategories.map(
      ({ subTypeId, name }) => ({
        label: name,
        value: subTypeId
      })
    );

    const sortOptions = [
      { label: 'الاكثر اعجابا', value: '1' },
      { label: 'انضم مؤخرا', value: '2' }
    ];

    if (this.props.categories === [] || this.props.subcategories === []) {
      return null;
    }

    return (
      <div style={{ marginRight: '200px' }}>
        <Breadcrumb size="huge" className="addPadding">
          <Breadcrumb.Section as={NavLink} to="/" className="custom-link">
            الرئيسية
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section>المصممين</Breadcrumb.Section>
        </Breadcrumb>
        <Container>
          <div style={{ margin: '30px auto' }}>
            <Grid>
              <Grid.Column width={4}>
                <Select
                  options={categoryOptions}
                  placeholder="التصنيف"
                  onChange={data => this.props.getDesignersByType(data.value)}
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <Select
                  options={subcategoriesOptions}
                  placeholder="الأقسام"
                  onChange={data => this.props.getAllDesigners(data.value)}
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <Select
                  options={sortOptions}
                  placeholder="على حسب"
                  onChange={data => this.sortDesigners(data.value)}
                />
              </Grid.Column>
            </Grid>
          </div>

          <Card.Group itemsPerRow={5}>{this.renderCards()}</Card.Group>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSubcategories: () => dispatch(getSubcategories()),
  getCategories: () => dispatch(getCategories()),
  getDesigners: () => dispatch(getDesigners()),
  sortDesignersByDate: () => dispatch(sortDesignersByDate()),
  sortDesignersByLikes: () => dispatch(sortDesignersByLikes()),
  getDesignersByType: id => dispatch(getDesignersByType(id)),
  getAllDesigners: id => dispatch(getAllDesigners(id))
});

const mapStateToProps = ({ categories, subcategories, designers }) => ({
  categories,
  subcategories,
  designers
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Designers);
