import React from 'react';
import { Navi } from 'features/common';

const Header = () => {
  return (
    <><header>
      <Navi />
      <div class="search"><input type="search" placeholder="Search"></input></div>
    </header>
    </>
  )
}

export default Header