const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-base",
  "@solana/wallet-adapter-bitpie",
  "@solana/wallet-adapter-coin98",
  "@solana/wallet-adapter-ledger",
  "@solana/wallet-adapter-mathwallet",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-sollet",
  "@solana/wallet-adapter-solong",
  "@solana/wallet-adapter-wallets",
  "@project-serum/sol-wallet-adapter",
])

module.exports = withTM({
  webpack5: true,
  webpack: (config) => {
    /** Fallbacks for some reason @project-serum/anchor imports all these stuff */
    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      crypto: false,
    }

    return config
  },
})
