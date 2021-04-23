import React from 'react';
import CardBody from '../atoms/CardBody';
import CardContainer from '../atoms/CardContainer';
import CardHeader from '../atoms/CardHeader';
import CardTitle from '../atoms/CardTitle';
import CardProps from './CardProps';

const Card = ({ title, children }: CardProps): JSX.Element => {
  return (
    <CardContainer data-testid="card">
      <CardHeader data-testid="card-header">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody data-testid="card-body">{children}</CardBody>
    </CardContainer>
  );
};

export default Card;
