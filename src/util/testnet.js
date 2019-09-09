//@flow

import {testnetDefaultChannel} from '../../package.json';

/**
 * @private
 */
const endpoint = {
  edge: 'https://api.edge.testnet.bitconch.com',
  beta: 'https://api.beta.testnet.bitconch.com',
  stable: 'https://api.testnet.bitconch.com',
};

/**
 * Retrieves the RPC endpoint URL for the specified testnet release
 * channel
 */
export function testnetChannelEndpoint(channel?: string): string {
  if (!channel) {
    return endpoint[testnetDefaultChannel];
  }

  if (endpoint[channel]) {
    return endpoint[channel];
  }
  throw new Error(`Unknown channel: ${channel}`);
}
