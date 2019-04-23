import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Grid, List, Button, Icon } from 'semantic-ui-react';

import EditProfileForm from './EditProfileForm/EditProfileForm';

const ProfileSettings = ({ adminData, profilePicUpload }) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <React.Fragment>
      <EditProfileForm
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        adminData={adminData}
      />

      <Segment style={{ height: '300px' }} color="blue">
        <Header content="البيانات الشخصية" style={{ fontSize: '30px' }} />
        <Grid columns={2}>
          <Grid.Column width={10}>
            <List divided size="huge" verticalAlign="middle">
              <List.Item>
                <List.Content>
                  <List.Icon name="user" color="grey" />
                  الاسم: {`${adminData.firstName} ${adminData.lastName}`}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Icon name="mobile" color="grey" />
                  رقم الجوال: {adminData.mobile}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Icon name="mail" color="grey" />
                  البريد الاكترونى: {adminData.email}
                </List.Content>
              </List.Item>
            </List>
            <Button
              primary
              icon
              labelPosition="left"
              onClick={() => setModalOpened(true)}
            >
              <Icon name="edit" /> إعدادات الحساب
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({
  adminData: auth
});

export default connect(mapStateToProps)(ProfileSettings);
