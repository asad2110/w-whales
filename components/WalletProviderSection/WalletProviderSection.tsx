/** @jsxImportSource theme-ui */
import React, { FC, useMemo } from "react"

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
  getLedgerWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"

import Minter from "./Minter"

/**
 * Component that contains the whole minting process
 * It is necessary to be separate, since it depends on the global window variable
 * Then the rest of the page can be rendered on server
 */
const WalletProviderSection: FC = () => {

    var network = '' as WalletAdapterNetwork
    if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT.includes('devnet')) {
      network = 'devnet' as WalletAdapterNetwork
    } else {
      network = 'mainnet-beta' as WalletAdapterNetwork
    }

    var endpoint = ''
    if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT == 'quicknode-devnet') {
      endpoint = process.env.NEXT_PUBLIC_QUICKNODE_DEVNET_RPC_ENDPOINT
    } else if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT == 'quicknode-mainnet-beta') {
      endpoint = process.env.NEXT_PUBLIC_QUICKNODE_MAINNET_BETA_RPC_ENDPOINT
    } else if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT == 'solana-devnet') {
      endpoint = process.env.NEXT_PUBLIC_SOLANA_DEVNET_RPC_ENDPOINT
    }

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: { clientId: "Get a client ID @ https://developer.tor.us" },
      }),
      getLedgerWallet(),
      getSolletWallet({ network }),
    ],
    [network]
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider logo="/images/logo.png">
          <Minter />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletProviderSection