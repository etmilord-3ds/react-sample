import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from '../navigation/navbar';

const Header = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
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
