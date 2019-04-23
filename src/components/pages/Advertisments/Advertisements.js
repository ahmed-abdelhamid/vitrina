import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Table, Container, Button, Icon } from 'semantic-ui-react';
import { getAllAdvertisements } from '../../../actions';
import Carousel from '../../layouts/Carousel/Carousel';
import AdvertisementForm from './AdvertismentForm/AdvertisementForm';
import DeleteModal from './AdvertismentForm/DeleteModal';

const Advertisments = ({ getAllAdvertisements, advertisements }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getAllAdvertisements();
    };
    fetchData();
  }, []);
  const renderRows = () =>
    advertisements.map(ad => (
      <Table.Row key={ad.adId} textAlign="left">
        <Table.Cell>{ad.name}</Table.Cell>
        <Table.Cell>
          <a href={ad.imagePath}>{ad.imagePath}</a>
        </Table.Cell>
        <Table.Cell>
          <Button
            floated="right"
            negative
            icon
            labelPosition="right"
            onClick={() => {
              setSelectedAd(ad);
              setDeleteModalOpened(true);
            }}
          >
            <Icon name="trash" /> حذف
          </Button>
        </Table.Cell>
      </Table.Row>
    ));

  return (
    <React.Fragment>
      <AdvertisementForm
        open={modalOpened}
        onClose={() => {
          setSelectedAd(null);
          setModalOpened(false);
        }}
      />
      <DeleteModal
        open={deleteModalOpened}
        ad={selectedAd}
        onClose={() => {
          setSelectedAd(null);
          setDeleteModalOpened(false);
        }}
      />

      <div style={{ marginRight: '200px' }}>
        <Breadcrumb size="huge" className="addPadding">
          <Breadcrumb.Section>الإعلانات</Breadcrumb.Section>
        </Breadcrumb>

        <Container>
          <Carousel ads={advertisements} />
          <Table selectable color="black" textAlign="left">
            <Table.Header>
              <Table.Row style={{ fontSize: '20px' }}>
                <Table.HeaderCell>اسم الإعلان</Table.HeaderCell>
                <Table.HeaderCell>رابط صورة الإعلان</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>

            <Table.Body>{renderRows()}</Table.Body>

            <Table.Footer>
              <Table.Row textAlign="center">
                <Table.HeaderCell colSpan="3">
                  <Button
                    primary
                    icon
                    labelPosition="right"
                    onClick={() => setModalOpened(true)}
                  >
                    <Icon name="plus" size="large" /> إضافة أعلان جديد
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ advertisements }) => ({
  advertisements
});

const mapDispatchToProps = disptach => ({
  getAllAdvertisements: () => disptach(getAllAdvertisements())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advertisments);
