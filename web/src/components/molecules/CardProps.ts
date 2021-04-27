import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

export default CardProps;
