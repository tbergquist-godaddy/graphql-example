import path from 'path';
import testBC from '@adeira/graphql-bc-checker';

import schema from '../src/graphql/Schema';

const allowBreakingChanges = process.argv.includes('--allow-bc');

testBC({
  allowBreakingChanges,
  snapshotLocation: path.join(__dirname, '..', 'schema.graphql'),
  schema,
});
