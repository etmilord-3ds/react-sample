import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOGIN_ROUTE } from '../../constants/routes';
import {
  PRIMARY_BRAND_COLOR,
  PRIMARY_BRAND_TEXT_COLOR,
} from '../../constants/styles';

const StyledNavBackground = styled.div`
  background-color: ${PRIMARY_BRAND_COLOR};
  color: ${PRIMARY_BRAND_TEXT_COLOR};
  flex-grow: 1;
  a {
    color: ${PRIMARY_BRAND_TEXT_COLOR};
  }
`;

const StyledNavContents = styled.div`
  margin: 20px;
  flex-flow: row;
`;

type NavbarProps = {
  loggedIn: boolean;
  displayName?: string;
};

const NavBar: React.FC<NavbarProps> = ({ loggedIn, displayName }) => {
  return (
    <StyledNavBackground>
      <StyledNavContents>
        {!loggedIn && <Link to={`/${LOGIN_ROUTE}`}>Login</Link>}
      </StyledNavContents>
    </StyledNavBackground>
  );
};

export { NavBar };
