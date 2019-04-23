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

  const rows = [
    {
      iconName: 'calendar',
      rowName: 'تاريخ التسجيل',
      value: designer.creationdate
    },
    {
      iconName: 'mail',
      rowName: 'البريد الإلكترونى',
      value: designer.email || 'لا يوجد'
    },
    {
      iconName: 'phone',
      rowName: 'رقم الهاتف',
      value: designer.mobile || 'لا يوجد'
    },
    {
      iconName: 'twitter',
      rowName: 'حساب تويتر',
      value: designer.twitter || 'لا يوجد'
    },
    {
      iconName: 'instagram',
      rowName: 'حساب الانستجرام',
      value: designer.instagram || 'لا يوجد'
    },
    {
      iconName: 'browser',
      rowName: 'الموقع الإلكترونى',
      value: designer.website || 'لا يوجد'
    },
    {
      iconName: 'sticky note',
      rowName: 'الوصف',
      value: designer.description || 'لا يوجد'
    }
  ];

  const renderRows = () =>
    rows.map(({ iconName, rowName, value }, index) => (
      <Table.Row key={index}>
        <Table.Cell style={{ fontWeight: 'bold' }}>
          <Icon name={iconName} size="large" className="icons-table" />
          {rowName}
        </Table.Cell>
        <Table.Cell>{value}</Table.Cell>
      </Table.Row>
    ));

  return (
    <div style={{ marginRight: '200px' }}>
      <Breadcrumb size="huge" className="addPadding">
        <Breadcrumb.Section
          as={NavLink}
          to="/designers"
          className="custom-link"
        >
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
          <Table.Body>{renderRows()}</Table.Body>
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
