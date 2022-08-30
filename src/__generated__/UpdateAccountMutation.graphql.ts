/**
 * @generated SignedSource<<c151d37177824399a8d55bd46c52ea2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateAccount = {
  firstName?: string | null;
  lastName?: string | null;
  telephone?: string | null;
};
export type UpdateAccountMutation$variables = {
  account: UpdateAccount;
};
export type UpdateAccountMutation$data = {
  readonly updateAccount: {
    readonly __typename: string;
    readonly account?: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"UpdateAccount">;
    } | null;
    readonly message?: string | null;
  } | null;
};
export type UpdateAccountMutation = {
  response: UpdateAccountMutation$data;
  variables: UpdateAccountMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "account"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "account",
    "variableName": "account"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Error",
  "abstractKey": "__isError"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateAccount",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Account",
                "kind": "LinkedField",
                "name": "account",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "UpdateAccount"
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "UpdateAccountResponse",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateAccount",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Account",
                "kind": "LinkedField",
                "name": "account",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "UpdateAccountResponse",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a1ff2d16fa9be436b86d79dbcb1154df",
    "id": null,
    "metadata": {},
    "name": "UpdateAccountMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateAccountMutation(\n  $account: UpdateAccount!\n) {\n  updateAccount(account: $account) {\n    __typename\n    ... on Error {\n      __isError: __typename\n      message\n    }\n    ... on UpdateAccountResponse {\n      account {\n        id\n        ...UpdateAccount\n      }\n    }\n  }\n}\n\nfragment UpdateAccount on Account {\n  firstName\n  lastName\n  telephone\n}\n"
  }
};
})();

(node as any).hash = "d9fb5cdc7d4fae6458ec1e55e6b9db1b";

export default node;
