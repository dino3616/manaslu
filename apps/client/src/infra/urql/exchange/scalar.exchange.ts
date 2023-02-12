import { parseISO } from 'date-fns';
import type { IntrospectionQuery } from 'graphql';
import customScalarsExchange from 'urql-custom-scalars-exchange';
import schema from '../../../../graphql.schema.json';

export const scalarExchange = customScalarsExchange({
  schema: schema as unknown as IntrospectionQuery,
  scalars: {
    DateTime: (value: unknown) => (typeof value === 'string' ? parseISO(value) : new Date(0)),
  },
});
