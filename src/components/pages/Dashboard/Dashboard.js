import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Segment, Header } from 'semantic-ui-react';
import { getAllAdvertisements, getDesignersCount } from '../../../actions';
import AdvertisementBar from './AdvertisementBar';
import DesignersCount from './DesignersCount';
import ProfileSettings from './ProfileSettings';
import SortedDesignerByDate from './SortedDesignersDate';
import SortedDesignerByLikes from './SortedDesignersLikes';

const Dashboard = props => {
  useEffect(() => {
    const fetchData = () => {
      props.getAllAdvertisements();
      props.getDesignersCount();
    };
    fetchData();
  }, []);

  if (!props.ads) {
    return null;
  }

  return (
    <React.Fragment>
      <div style={{ marginRight: '200px' }}>
        <Container>
          <AdvertisementBar ads={props.ads} />

          <Grid columns={2}>
            <Grid.Column width={4}>
              <DesignersCount designersCount={props.designersCount} />
            </Grid.Column>
            <Grid.Column width={12}>
              <ProfileSettings />
            </Grid.Column>
          </Grid>

          <Grid columns={2}>
            <Grid.Column>
              <Segment>
                <Header content="الأكثر إعجابا" />
                <SortedDesignerByLikes />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header content="انضم مؤخرا" />
                <SortedDesignerByDate />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  ads: state.advertisements,
  designersCount: state.designersCount
});

const mapDispatchToProps = dispatch => ({
  getAllAdvertisements: () => dispatch(getAllAdvertisements()),
  getDesignersCount: () => dispatch(getDesignersCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
