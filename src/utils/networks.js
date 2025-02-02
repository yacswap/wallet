import { BitcoinNetworks } from '@liquality/bitcoin-networks'
import { EthereumNetworks } from '@liquality/ethereum-networks'
import { NearNetworks } from '@liquality/near-networks'
import { SolanaNetworks } from '@liquality/solana-networks'
import { TerraNetworks } from '@liquality/terra-networks'
import { YacoinNetworks } from '@yac-swap/yacoin-networks'

export const Networks = ['mainnet', 'testnet']

export const ChainNetworks = {
  bitcoin: {
    testnet: BitcoinNetworks.bitcoin_testnet,
    mainnet: BitcoinNetworks.bitcoin
  },
  ethereum: {
    testnet: EthereumNetworks.ropsten,
    mainnet: EthereumNetworks.ethereum_mainnet
  },
  rsk: {
    testnet: EthereumNetworks.rsk_testnet,
    mainnet: EthereumNetworks.rsk_mainnet
  },
  bsc: {
    testnet: EthereumNetworks.bsc_testnet,
    mainnet: EthereumNetworks.bsc_mainnet
  },
  polygon: {
    testnet: EthereumNetworks.polygon_testnet,
    mainnet: EthereumNetworks.polygon_mainnet
  },
  arbitrum: {
    testnet: EthereumNetworks.arbitrum_testnet,
    mainnet: EthereumNetworks.arbitrum_mainnet
  },
  near: {
    testnet: NearNetworks.near_testnet,
    mainnet: NearNetworks.near_mainnet
  },
  solana: {
    testnet: SolanaNetworks.solana_testnet,
    mainnet: SolanaNetworks.solana_mainnet
  },
  terra: {
    testnet: TerraNetworks.terra_testnet,
    mainnet: TerraNetworks.terra_mainnet
  },
  fuse: {
    testnet: {
      name: 'fuse_testnet',
      coinType: '60',
      networkId: 123,
      chainId: 123,
      isTestnet: true
    }, // TODO: change to EthereumNetworks.fuse_testnet after chainabstractionlayer/pull/491 is merged
    mainnet: EthereumNetworks.fuse_mainnet
  },
  yacoin: {
    testnet: YacoinNetworks.yacoin_testnet,
    mainnet: YacoinNetworks.yacoin
  }
}
