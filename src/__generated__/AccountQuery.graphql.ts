/**
 * @generated SignedSource<<d9da002e8ac4622f8adcc9911f732d30>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AccountQuery$variables = {};
export type AccountQuery$data = {
  readonly account: {
    readonly firstName: string | null;
    readonly id: string;
    readonly lastName: string | null;
  } | null;
};
export type AccountQuery = {
  response: AccountQuery$data;
  variables: AccountQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
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
          name: 'id',
          storageKey: null,
        },
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
          name: 'lastName',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'AccountQuery',
      selections: v0 /*: any*/,
      type: 'RootQuery',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'AccountQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: 'dfbb73c745146fa1a9f433c0a245c9be',
      id: null,
      metadata: {},
      name: 'AccountQuery',
      operationKind: 'query',
      text: 'query AccountQuery {\n  account {\n    id\n    firstName\n    lastName\n  }\n}\n',
    },
  };
})();

(node as any).hash = '05b5b84f71ab6e6cb90cf1528f1d839a';

export default node;
