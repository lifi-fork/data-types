import { ChainId } from '@lifi/types'

// based on:
// new nice tool to search for addresses: https://www.multicall3.com/deployments
// - https://github.com/mds1/multicall#deployments
// - https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts#L323
// - https://github.com/joshstevens19/ethereum-multicall#multicall-contracts
// '0xcA11bde05977b3631167028862bE2a173976CA11' is a Multicall3 contract
// export const multicallAddresses: Record<ChainId, string> = {
export const multicallAddresses: { [ChainId: number]: string } = {
  // Mainnet
  [ChainId.ETH]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.POL]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD',
  [ChainId.BSC]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.DAI]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.FTM]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5',
  [ChainId.AVA]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.ARB]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.OPT]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x2DC0E2aa608532Da689e89e237dF582B783E552C',
  [ChainId.ONE]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.FSN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.MOR]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x270f2F35bED92B7A59eA5F08F6B3fd34c8D9D9b5',
  [ChainId.CEL]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x9aac9048fC8139667D6a2597B902865bfdc225d3',
  [ChainId.FUS]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.CRO]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x5e954f5972EC6BFc7dECd75779F10d848230345F',
  [ChainId.BOB]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0xfb91c019D9F12A0f9c23B4762fa64A34F8daDb4A',
  [ChainId.MOO]: '0xcA11bde05977b3631167028862bE2a173976CA11', // '0x6477204E12A7236b9619385ea453F370aD897bb2',
  [ChainId.MAM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.AUR]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.EVM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.RSK]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.VEL]: '0x6ede559F2Bd951777470595761672091CCD21Ac6',
  [ChainId.PZE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ERA]: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
  [ChainId.LNA]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ARN]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BAS]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.SCL]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.MOD]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.MNT]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BLS]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.SEI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.FRA]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.TAI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.GRA]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.IMX]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.KAI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.XLY]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.OPB]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.WCC]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.LSK]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ABS]: '0xAa4De41dba0Ca5dCBb288b7cC6b708F3aaC759E7',

  // TODO
  // [ChainId.EXP]: '', // TODO
  // [ChainId.TCH]: '', // TODO
  // [ChainId.UBQ]: '', // TODO
  // [ChainId.DIO]: '', // TODO
  // [ChainId.TLO]: '', // TODO
  // [ChainId.SHI]: '', // TODO
  // [ChainId.GL1]: '', // TODO
  // [ChainId.TBW]: '', // TODO
  // [ChainId.PALM]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  // [ChainId.TELOS]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',

  // none EVM
  // [ChainId.SOL]: '', // NOT NEEDED
  // [ChainId.TER]: '', // NOT NEEDED
  // [ChainId.OAS]: '', // NOT NEEDED
  // [ChainId.SOLT]: '', // NOT NEEDED
  // [ChainId.TERT]: '', // NOT NEEDED
  // [ChainId.OAST]: '', // NOT NEEDED
}
