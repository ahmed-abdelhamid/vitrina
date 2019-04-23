import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Breadcrumb,
  Container,
  Image,
  Header,
  Table,
  Icon
} from 'semantic-ui-react';
import { getDesigner } from '../../../actions';

import placeholder from '../../../assets/placeholder.png';

const DesignerDetail = ({ getDesigner, designer, match }) => {
  useEffect(() => {
    const fetchData = () => {
      getDesigner(match.params.id);
    };
    fetchData();
  }, []);

  if (!designer) {
    return null;
  }

  return (
    <div style={{ marginRight: '200px' }}>
      <Breadcrumb size="huge" className="addPadding">
        <Breadcrumb.Section as={NavLink} to="/designers/1/1">
          المصممين
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>تفاصيل المصمم</Breadcrumb.Section>
      </Breadcrumb>

      <Container>
        <Image
          centered
          circular
          size="small"
          src={designer.imageProfile || placeholder}
        />

        <Header
          content={`${designer.firstName} ${designer.lastName}`}
          textAlign="center"
          size="large"
        />

        <Table selectable color="black">
          <Table.Body>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="calendar" size="large" />
                تاريخ التسجيل
              </Table.HeaderCell>
              <Table.Cell>{designer.creationdate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="mail" size="large" />
                البريد الإلكترونى
              </Table.HeaderCell>
              <Table.Cell>{designer.email || 'No'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="phone" size="large" />
                رقم الهاتف
              </Table.HeaderCell>
              <Table.Cell>{designer.mobile || 'No'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="twitter" size="large" />
                حساب تويتر
              </Table.HeaderCell>
              <Table.Cell>{designer.twitter || 'No'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="instagram" size="large" />
                حساب الانستجرام
              </Table.HeaderCell>
              <Table.Cell>{designer.instagram || 'No'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="browser" size="large" />
                الموقع الإلكترونى
              </Table.HeaderCell>
              <Table.Cell>{designer.website || 'No'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="sticky note" size="large" />
                الوصف
              </Table.HeaderCell>
              <Table.Cell>{designer.description || 'No'}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ designers }) => ({
  designer: designers[0]
});

const mapDispatchToProps = dispatch => ({
  getDesigner: designerId => dispatch(getDesigner(designerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignerDetail);
