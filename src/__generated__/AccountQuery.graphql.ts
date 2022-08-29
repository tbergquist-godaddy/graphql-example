/**
 * @generated SignedSource<<21cbf001d663ff1a8d3a39c488356d6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type AccountQuery$variables = {};
export type AccountQuery$data = {
  readonly account: {
    readonly ' $fragmentSpreads': FragmentRefs<'AccountsHeading'>;
  } | null;
};
export type AccountQuery = {
  response: AccountQuery$data;
  variables: AccountQuery$variables;
};

const node: ConcreteRequest = {
  fragment: {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'AccountQuery',
    selections: [
      {
        alias: null,
        args: null,
        concreteType: 'Account',
        kind: 'LinkedField',
        name: 'account',
        plural: false,
        selections: [
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'AccountsHeading',
          },
        ],
        storageKey: null,
      },
    ],
    type: 'RootQuery',
    abstractKey: null,
  },
  kind: 'Request',
  operation: {
    argumentDefinitions: [],
    kind: 'Operation',
    name: 'AccountQuery',
    selections: [
      {
        alias: null,
        args: null,
        concreteType: 'Account',
        kind: 'LinkedField',
        name: 'account',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'firstName',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
  },
  params: {
    cacheID: '2363cee1591b8801eb06ad826bd0ea6e',
    id: null,
    metadata: {},
    name: 'AccountQuery',
    operationKind: 'query',
    text: 'query AccountQuery {\n  account {\n    ...AccountsHeading\n    id\n  }\n}\n\nfragment AccountsHeading on Account {\n  firstName\n}\n',
  },
};

(node as any).hash = '0649b49730c6009748826584bae92802';

export default node;
