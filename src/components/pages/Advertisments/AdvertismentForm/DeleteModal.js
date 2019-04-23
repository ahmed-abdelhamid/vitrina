import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';

import { deleteAdvertisement } from '../../../../actions';

let DeleteModal = ({ open, onClose, deleteAdvertisement, ad }) => {
  if (!ad) {
    return null;
  }

  return (
    <Modal
      open={open}
      closeOnDocumentClick={true}
      size="small"
      onClose={() => onClose()}
      closeIcon={true}
    >
      <Modal.Header content="حذف إعلان" style={{ textAlign: 'center' }} />
      <Modal.Content>
        <p>
          <strong>{ad.name}</strong>
          {` `}
          هل أنت متأكد من حذف الإعلان
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          icon="trash"
          labelPosition="left"
          type="button"
          content="حذف"
          onClick={() => {
            deleteAdvertisement(ad.adId);
            onClose();
          }}
        />
        <Button
          positive
          icon="close"
          labelPosition="left"
          content="الغاء"
          onClick={() => onClose()}
        />
      </Modal.Actions>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAdvertisement: id => dispatch(deleteAdvertisement(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(DeleteModal);
