/**
 * @generated SignedSource<<0c36144ff5987f1e991f0281265db786>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountDetails$data = {
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly telephone: string | null;
  readonly " $fragmentType": "AccountDetails";
};
export type AccountDetails$key = {
  readonly " $data"?: AccountDetails$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountDetails">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountDetails",
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

(node as any).hash = "4e4ec246edc21ad6a5ddeaab3f403b7f";

export default node;
