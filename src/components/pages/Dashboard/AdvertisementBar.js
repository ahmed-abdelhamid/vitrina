import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import Carousel from '../../layouts/Carousel/Carousel';

const AdvertisementBar = ({ ads }) => (
  <div style={{ padding: '50px' }}>
    <Carousel ads={ads} />
    <Button
      className="custom-button"
      as={NavLink}
      to="/advertisements"
      primary
      floated="right"
      icon
      labelPosition="left"
    >
      <Icon name="edit" />
      تعديل
    </Button>
  </div>
);

export default AdvertisementBar;
