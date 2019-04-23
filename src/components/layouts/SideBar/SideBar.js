import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Image, Button, Icon } from 'semantic-ui-react';
import { logout } from '../../../actions';
import { history } from '../../App';
import logo from '../../../assets/vitrinaLogo.png';

const menuItems = [
  { content: 'الرئيسية', name: 'dashboard' },
  { content: 'التصنيفات', name: 'categories' },
  { content: 'المصممين', name: 'designers' },
  { content: 'الإعلانات', name: 'advertisements' }
];

const renderMenuItems = (activeItem, setActiveItem) =>
  menuItems.map(({ content, name }) => (
    <Menu.Item
      style={{ fontSize: '16px' }}
      as={NavLink}
      to={`/${name}`}
      key={name}
      content={content}
      name={name}
      active={activeItem === name}
      onClick={() => setActiveItem(name)}
    />
  ));

const Header = props => {
  const [activeItem, setActiveItem] = useState('home');

  const handleLogout = async () => {
    try {
      await props.logout();
      history.push('/');
    } catch (e) {}
  };

  return (
    <Menu size="small" inverted fixed="left" vertical>
      <Menu.Item className="text-center">
        <Menu.Header content={props.name} />
        <Button icon negative labelPosition="left" onClick={handleLogout}>
          <Icon name="user outline" />
          تسجيل الخروج
        </Button>
      </Menu.Item>

      <Menu.Item>
        <Image src={logo} style={{ margin: '0 auto' }} />
      </Menu.Item>

      {renderMenuItems(activeItem, setActiveItem)}
    </Menu>
  );
};

const mapStateToProps = ({ auth }) => ({
  name: `${auth.firstName} ${auth.lastName}`
});

const mapDispatchToProps = dispatch => ({
  logout: token => dispatch(logout(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
