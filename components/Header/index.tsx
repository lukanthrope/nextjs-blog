import { memo } from 'react';
import Link from 'next/link';
import { StyledHeader, MenuContainer } from './StyledHeader';
import { A } from '../../styles';

const Header = (): JSX.Element => (
  <StyledHeader>
    <MenuContainer>
      <Link href="/">
        <A>Home</A>
      </Link>
      <Link href="/posts/new">
        <A>Create Post</A>
      </Link>
    </MenuContainer>
  </StyledHeader>
);

export default memo(Header);
