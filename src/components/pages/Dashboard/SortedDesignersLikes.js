import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { sortDesignersByLikes } from '../../../actions';
import placeholder from '../../../assets/placeholder.png';

const SortedDesignersLikes = ({ sortDesignersByLikes, designersByLikes }) => {
  useEffect(() => {
    const fetchData = () => {
      sortDesignersByLikes();
    };
    fetchData();
  }, []);

  const lastDesigners = designersByLikes.slice(0, 3);
  const renderCards = () => {
    return lastDesigners.map(
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
  };

  if (!designersByLikes[0]) {
    return (
      <Message info size="big">
        <Message.Header content="لا يوجد لديك مصممين فى الوقت الحالى" />
      </Message>
    );
  }

  return <Card.Group itemsPerRow={3}>{renderCards()}</Card.Group>;
};

const mapStateToProps = ({ designersByLikes }) => ({ designersByLikes });

const mapDispatchToProps = dispatch => ({
  sortDesignersByLikes: () => dispatch(sortDesignersByLikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortedDesignersLikes);
