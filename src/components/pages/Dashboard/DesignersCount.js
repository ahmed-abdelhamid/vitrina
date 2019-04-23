import React from 'react';
import { Card } from 'semantic-ui-react';

const DesignersCount = ({ designersCount }) => {
  return (
    <Card color="blue" style={{ height: '300px', display: 'inline-block' }}>
      <Card.Content>
        <Card.Header
          textAlign="center"
          style={{ fontSize: '30px', paddingBottom: '15px' }}
        >
          المصممين
        </Card.Header>
        <Card.Meta
          textAlign="center"
          style={{ fontSize: '25px', paddingBottom: '50px' }}
        >
          وصل عدد المصممين لديك الان
        </Card.Meta>
        <Card.Description textAlign="center" style={{ fontSize: '70px' }}>
          {designersCount}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default DesignersCount;
