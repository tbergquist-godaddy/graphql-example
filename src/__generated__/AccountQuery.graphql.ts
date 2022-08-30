/**
 * @generated SignedSource<<63866a0926fe387984569466d777b2ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountQuery$variables = {};
export type AccountQuery$data = {
  readonly account: {
    readonly " $fragmentSpreads": FragmentRefs<"AccountDetails" | "AccountsHeading" | "UpdateAccount">;
  } | null;
};
export type AccountQuery = {
  response: AccountQuery$data;
  variables: AccountQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AccountsHeading"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AccountDetails"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UpdateAccount"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AccountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "telephone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "38c87cf4a7cb28cdbd3c3769d1434841",
    "id": null,
    "metadata": {},
    "name": "AccountQuery",
    "operationKind": "query",
    "text": "query AccountQuery {\n  account {\n    ...AccountsHeading\n    ...AccountDetails\n    ...UpdateAccount\n    id\n  }\n}\n\nfragment AccountDetails on Account {\n  firstName\n  lastName\n  telephone\n}\n\nfragment AccountsHeading on Account {\n  firstName\n}\n\nfragment UpdateAccount on Account {\n  firstName\n  lastName\n  telephone\n}\n"
  }
};

(node as any).hash = "96166051504d1d36d0027419410c90d4";

export default node;
