import type { MVMChain } from '@lifi-fork/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi-fork/types'

export const supportedMVMChains: MVMChain[] = [
  {
    key: ChainKey.SUI,
    chainType: ChainType.MVM,
    name: 'Sui',
    coin: CoinKey.SUI,
    id: ChainId.SUI,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/sui.svg',
    faucetUrls: ['https://stakely.io/faucet/sui-sui'],
    metamask: {
      chainId: ChainId.SUI.toString(),
      blockExplorerUrls: ['https://www.suiscan.xyz/', 'https://suivision.xyz/'],
      chainName: 'Sui',
      nativeCurrency: {
        name: 'Sui',
        symbol: 'SUI',
        decimals: 9,
      },
      rpcUrls: ['https://fullnode.mainnet.sui.io:443'],
    },
  },
]
