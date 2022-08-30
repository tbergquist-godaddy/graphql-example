/**
 * @generated SignedSource<<29ad73eefde4fb52efd76b2bc3dc25b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateAccount$data = {
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly telephone: string | null;
  readonly " $fragmentType": "UpdateAccount";
};
export type UpdateAccount$key = {
  readonly " $data"?: UpdateAccount$data;
  readonly " $fragmentSpreads": FragmentRefs<"UpdateAccount">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateAccount",
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
    }
  ],
  "type": "Account",
  "abstractKey": null
};

(node as any).hash = "b8a960aed15d3a5377ad349b94b98ef9";

export default node;
