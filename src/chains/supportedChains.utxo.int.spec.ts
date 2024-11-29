import { describe, expect, test } from 'vitest'
import { supportedUXTOChains } from './supportedChains.utxo'
import { isSameUrl } from './utils'

describe.concurrent('UTXO chains RPC check', () => {
  const rpcUrls = supportedUXTOChains.flatMap((chain) =>
    chain.metamask.rpcUrls.map((rpcUrl) => ({
      rpcUrl: rpcUrl,
      chainId: chain.id,
      chainName: chain.name,
    }))
  )

  test.for(rpcUrls)(
    `should successfully get chain ID from $chainName - $chainId RPC: $rpcUrl`,
    { timeout: 10_000, retry: 3 },
    async ({ rpcUrl }) => {
      const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '1.0',
          id: 'curltest',
          method: 'getblockchaininfo',
          params: [],
        }),
      })
      const data = await response.json()
      expect(response.ok).toBe(true)
      expect(response.status).toBe(200)
      expect(data.result.blocks).toBeGreaterThan(0)
    }
  )
})

// Execute the test sequentially to avoid rate limiting from the block explorer
describe('UTXO chains block explorer check', () => {
  const blockExplorerUrls = supportedUXTOChains.flatMap((chain) =>
    chain.metamask.blockExplorerUrls.map((blockExplorerUrl) => ({
      blockExplorerUrl: blockExplorerUrl,
      chainId: chain.id,
      chainName: chain.name,
    }))
  )

  test.for(blockExplorerUrls)(
    `block explorer should be alive $chainName - $chainId - $blockExplorerUrl`,
    { timeout: 10_000, retry: 3 },
    async ({ blockExplorerUrl }) => {
      const response = await fetch(blockExplorerUrl)
      expect(isSameUrl(blockExplorerUrl, response.url)).toBeTruthy()
      expect(response.ok).toBe(true)
      expect(response.status).toBe(200)
    }
  )
})
