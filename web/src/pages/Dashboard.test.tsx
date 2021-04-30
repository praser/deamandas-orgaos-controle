import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectTypeOf, typecheck } from '@humeris/espresso-shot';
import {
  HighLightWithLoading,
  SelectWithLoading,
  CardWithLoading,
  getUser,
  formatDateISO,
  columns,
} from './Dashboard';

import User from '../models/user';
import { DataTableColumn } from '../components/atoms/DataTableProps';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk3ODc3OTIsImlzcyI6IlNVREVQIiwibmJmIjoxNjE5Nzg3NzkyLCJleHAiOjE2MTk4MDkzOTIsInVzZXIiOnsiYmlydGhkYXkiOiIxOTg2LTEyLTEyVDAwOjAwOjAwWiIsImNwZiI6IjAxMTMzMjgxMTc2IiwiaWQiOiJjMDkxODAwIiwibmFtZSI6IlJ1YmVucyBQcmFzZXIgSsO6bmlvciIsInBoeXNpY2FsTG90YXRpb25JZCI6NTM4NSwicGh5c2ljYWxMb3RhdGlvbkFiYnJldmlhdGlvbiI6IkdFT1RSIiwicGhvdG8iOiJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vc3ZnL3N0YXRpYy9pY29ucy9zdmcvMTQ3LzE0NzE0NC5zdmcifX0.XGMMPP-fpSHx7q4H_ha0gFmaUQjJ_M1zkiWFIv6UWf4';

describe('Dashboard page', () => {
  beforeEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem('jwt', jwt);
  });

  describe('HighLightWithLoading', () => {
    it('is expected not to be null', () => {
      expect(HighLightWithLoading).not.toBeNull();
    });
  });

  describe('SelectWithLoading', () => {
    it('is expected not to be null', () => {
      expect(SelectWithLoading).not.toBeNull();
    });
  });

  describe('CardWithLoading', () => {
    it('is expected not to be null', () => {
      expect(CardWithLoading).not.toBeNull();
    });
  });

  typecheck(
    'getUser is expected to return an instance of User if jwt exists',
    check => {
      const user = getUser();
      check(expectTypeOf(user).toExtend<User>());
    },
  );
});

describe('formatDateISO', () => {
  const dateISO = '2021-03-01';
  let subject: string;

  beforeEach(() => {
    subject = formatDateISO(dateISO);
  });

  it('is expected to return a string', () => {
    expect(typeof subject).toEqual('string');
  });

  it('is expected to be in format dd/MM/yyyy', () => {
    expect(subject).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });
});

describe('columns', () => {
  typecheck('is expected to be and array of columns', check => {
    check(expectTypeOf(columns).toExtend<DataTableColumn[]>());
  });
});
