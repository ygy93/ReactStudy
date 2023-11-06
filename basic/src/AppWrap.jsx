import React from "react";
import { Children } from "react";

import HeaderNavbar from "./components/HeaderNavbar";
import HeaderImg from './components/header/HeaderImg';
import HeaderSearch from './components/header/HeaderSearch';

import SectionContents from "./components/SectionContents";
import SectionList from "./components/sections/SectionList";

import FooterNavbar from "./components/FooterNavbar";
import FooterMenu from "./components/footer/FooterMenu";

export default function AppWrap(){
  return(
    <>
      <HeaderNavbar>
        <HeaderImg />
        <HeaderSearch />
      </HeaderNavbar>

      <SectionContents>
        <SectionList />
      </SectionContents>

      <FooterNavbar>
        <FooterMenu />
      </FooterNavbar>
    </>
  );
}