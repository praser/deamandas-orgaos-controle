import React, { FC } from 'react';
import Profile from './Profile';
import TopBar from '../atoms/TopBar';
import VerticalRule from '../atoms/VerticalRule';
import SearchField from '../molecules/SerchField';
import AppName from '../atoms/AppName';
import HeaderProps from './HeaderProps';

const Header: FC<HeaderProps> = ({ appName, name, lotation, src }) => (
  <TopBar data-testid="header">
    <AppName>{appName}</AppName>
    <SearchField />
    <VerticalRule />
    <Profile name={name} lotation={lotation} src={src} />
  </TopBar>
);

export default Header;
