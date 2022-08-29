/**
 * @generated SignedSource<<524169f9001b50f3e059a6b517ea5e79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountsHeading$data = {
  readonly firstName: string | null;
  readonly " $fragmentType": "AccountsHeading";
};
export type AccountsHeading$key = {
  readonly " $data"?: AccountsHeading$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountsHeading">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountsHeading",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    }
  ],
  "type": "Account",
  "abstractKey": null
};

(node as any).hash = "c42396fd7a776b14ffce08377a8e5172";

export default node;
