import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {
  PRIMARY_BRAND_COLOR,
  PRIMARY_BRAND_TEXT_COLOR,
} from '../../constants/styles';
import { NavBar } from '../navigation/navbar';

const Header = styled.div`
  background-color: ${PRIMARY_BRAND_COLOR};
  color: ${PRIMARY_BRAND_TEXT_COLOR};
`;

const Layout: React.FC<{}> = () => {
  return (
    <>
      <Header>
        <NavBar loggedIn={false} />
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
