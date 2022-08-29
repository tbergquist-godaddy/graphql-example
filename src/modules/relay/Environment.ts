import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { invariant } from '@ux/js';

const { NEXT_PUBLIC_GRAPHQL_URL } = process.env;

const fetchQuery = async (operation, variables /* , cacheConfig, uploadables */) => {
  invariant(NEXT_PUBLIC_GRAPHQL_URL != null, 'Expected to have a GRAPHQL_URL but we did not');
  const res = await fetch(NEXT_PUBLIC_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      // Add authentication and other headers here
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query: operation.text, variables }),
  });
  return res.json();
};

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
function fetchRelay(params, variables) {
  // eslint-disable-next-line no-console
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchQuery(params, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
