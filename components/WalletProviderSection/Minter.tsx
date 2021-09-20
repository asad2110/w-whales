/** @jsxImportSource theme-ui */
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { Button, Flex, Spinner, Text } from "theme-ui"
import Countdown from "react-countdown"

import useCandyMachine from "../../hooks/useCandyMachine"
import useMinter from "../../hooks/useMinter"
import classes from './Minter.module.css'

type Props = {}

const MintButton = (props: Props) => {
  const wallet = useWallet()
  let { candyMachine } = useCandyMachine()
  const { isLoading, logs, mint, status, transactionStatus, ctime, isCompleted, updateStatus } = useMinter()

  let goLiveDate = null;
  
  let itemsRemaining = 0;

  if( transactionStatus == true ) {
    itemsRemaining = candyMachine?.data?.itemsAvailable?.toNumber() -
    candyMachine?.itemsRedeemed?.toNumber() - 1;
  } else {
    itemsRemaining = candyMachine?.data?.itemsAvailable?.toNumber() -
    candyMachine?.itemsRedeemed?.toNumber();
  }

  if( process.env.NEXT_PUBLIC_GO_LIVE_DATE_OVERRIDE == null || process.env.NEXT_PUBLIC_GO_LIVE_DATE_OVERRIDE === undefined ) {
    goLiveDate = candyMachine?.data.goLiveDate
        ? new Date(candyMachine?.data.goLiveDate.toNumber() * 1000)
        : null
  } else {
    
    goLiveDate = new Date( process.env.NEXT_PUBLIC_GO_LIVE_DATE_OVERRIDE );
  }

  var date = new Date();
  var count = 1;

  const isMintingReady =
    goLiveDate && goLiveDate.getTime() < new Date().getTime()



    var endpoint = ''
    if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT == 'quicknode-devnet') {
      endpoint = process.env.NEXT_PUBLIC_QUICKNODE_DEVNET_RPC_ENDPOINT
    } else if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT == 'quicknode-mainnet-beta') {
      endpoint = process.env.NEXT_PUBLIC_QUICKNODE_MAINNET_BETA_RPC_ENDPOINT
    } else if(process.env.NEXT_PUBLIC_SELECTED_ENDPOINT == 'solana-devnet') {
      endpoint = process.env.NEXT_PUBLIC_SOLANA_DEVNET_RPC_ENDPOINT
    }

  const Completionist = () => <span></span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state    
      updateStatus()
      return <Completionist />;
    } else {
      // Render a countdown     

      return (
        <span>
           {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </span>
      );
    }
  };


  if (isCompleted || isMintingReady) {
    var cc = classes.timer_completed_btn;
  } else {
    var cc = classes.timer_incompleted_btn;
  }

  return (

    <div>


        <div className={classes.wallet_custom}>
          <WalletMultiButton />
        </div>

      <Flex sx={{ flexDirection: "column" }}>

        <p style={{ marginBottom: "0px", fontSize: '22px' }}>
          Countdown Until Launch: &nbsp;
          <small>
            {goLiveDate && isMintingReady ? (
               "0 Days 0 Hours 0 Minutes 0 Seconds"
            ) : goLiveDate ? (
              <Countdown date={goLiveDate?.getTime()} now={function () {
                count += 1;

                date.setSeconds(date.getSeconds() + 1);
                return date.getTime();
              }

              } daysInHours={false} renderer={renderer} />
            ) : (
              "Live date not set"
            )}
          </small>
        </p>
      </Flex>
      
        <Flex
          sx={{

            gap: ".8rem",
          }}
        >
          {isLoading && <Spinner size={16} strokeWidth={2} />}
          <Text>{status}&nbsp;</Text>
        </Flex>

        {wallet.publicKey ? 
          <Button
            className={`btn btn-light btn-lg shadow text-dark ${cc}`} 
            onClick={wallet.publicKey ? () => mint() : () => false}
            disabled={!wallet.publicKey || !!isLoading || !itemsRemaining}
            title="Mint one token"
            style={{ fontWeight: "bold" }}
          >
            {wallet.publicKey
              ? itemsRemaining
                ? "Mint one token now!"
                : "Sold out!"
              : "Connect your wallet"}
          </Button>
          :
          <div className={classes.wallet_header_custom}>
          <WalletMultiButton />
          </div>
        }

        {/* <Button
          className={`btn btn-light btn-lg shadow text-dark ${cc}`} 
          onClick={wallet.publicKey ? () => mint() : () => false}
          disabled={!wallet.publicKey || !!isLoading || !itemsRemaining}
          title="Mint one token"
          style={{ fontWeight: "bold" }}
        >
          {wallet.publicKey
            ? itemsRemaining
              ? "Mint one token now!"
              : "Sold out!"
            : "Connect your wallet"}
        </Button> */}

        <span className={isCompleted || isMintingReady ? classes.timer_incompleted : classes.timer_completed} style={{ textAlign: 'center', display: 'block', 'maxWidth': '280px' }}>
            
            <span style={{paddingTop: '5px', display: 'inline-block'}}>
              {wallet.publicKey ? itemsRemaining ? 'Mint Price: ' + candyMachine?.data?.price?.toNumber() / LAMPORTS_PER_SOL + ' SOL' : '' : ''}
            </span>
            <br /> 
            
            <span>
              { wallet.publicKey ? itemsRemaining + ' mints remaining' : ''}
            </span>
            
        </span>

        {/* {candyMachine?.data?.price ? (
          <small>
            Mint price:{" "}
            {candyMachine?.data?.price?.toNumber() / LAMPORTS_PER_SOL} SOL
          </small>
        ) : null}
        {itemsRemaining ? (
          <small> {itemsRemaining} mints remaining</small>
        ) : null} */}
      
      <Flex
        sx={{
          flexDirection: "column",
          width: "100%",
          maxWidth: "300px",
          textAlign: "center"
        }}
      >
        {logs.map((log, i) => (
          <Text className="log" key={i}>
            <small>info</small>{" "}
            <Text dangerouslySetInnerHTML={{ __html: log }} />
          </Text>
        ))}
      </Flex>
    </div >
  )
}

export default MintButton
