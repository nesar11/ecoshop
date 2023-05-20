import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { styled } from 'styled-components';
import { mobile } from '../reponsive';
const Container = styled.div`
  height: 60px;
  padding: 0px 20px 25px 10px;
  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;
const Left = styled.div`
  flex: 1;
`;
const Input = styled.div`
  border: none;
  ${mobile({ width: '50px' })}
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo> InvenTec</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem> Register</MenuItem>
          <MenuItem> Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
