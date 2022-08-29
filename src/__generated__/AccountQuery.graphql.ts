/**
 * @generated SignedSource<<aab950d0b02b73495c0b819541c726f6>>
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
    readonly " $fragmentSpreads": FragmentRefs<"AccountDetails" | "AccountsHeading">;
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
    "cacheID": "8b67a5de2e61f245e821ed4193b96b24",
    "id": null,
    "metadata": {},
    "name": "AccountQuery",
    "operationKind": "query",
    "text": "query AccountQuery {\n  account {\n    ...AccountsHeading\n    ...AccountDetails\n    id\n  }\n}\n\nfragment AccountDetails on Account {\n  firstName\n  lastName\n  telephone\n}\n\nfragment AccountsHeading on Account {\n  firstName\n}\n"
  }
};

(node as any).hash = "69b845d4cc29bce8d0ac50d029845ca9";

export default node;
