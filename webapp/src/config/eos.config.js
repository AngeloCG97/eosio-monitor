export const endpoint = `${process.env.REACT_APP_EOS_API_PROTOCOL}://${process.env.REACT_APP_EOS_API_HOST}`
export const useBpJsonOnChain =
  process.env.REACT_APP_EOS_USE_BP_JSON_ON_CHAIN === 'true'
export const bpJsonOnChainContract =
  process.env.REACT_APP_EOS_BP_JSON_ON_CHAIN_CONTRACT
export const bpJsonOnChainTable =
  process.env.REACT_APP_EOS_BP_JSON_ON_CHAIN_TABLE
export const bpJsonOnChainScope =
  process.env.REACT_APP_EOS_BP_JSON_ON_CHAIN_SCOPE
export const exchangeRate = process.env.REACT_APP_EOS_DEFAULT_EXCHANGE_RATE
export const exchangeRateApi =
  process.env.REACT_APP_EOS_DEFAULT_EXCHANGE_RATE_API
export const nodeTypes = [
  {
    name: 'producer',
    color: '#4f4363',
    description: 'Node with signing key'
  },
  {
    name: 'full',
    color: '#6ec4e0',
    description: 'Node in front of producer'
  },
  {
    name: 'query',
    color: '#5484b3',
    description: 'Node that provides HTTP(S) API to the public'
  },
  {
    name: 'seed',
    color: '#000',
    description: 'Node that provides P2P and/or BNET to the public'
  }
]
