/** @jsxImportSource theme-ui */
import type { NextPage } from "next"
import Head from "next/head"
// import { Container, Flex } from "theme-ui"
import dynamic from "next/dynamic"
import CSS from 'csstype'
// import img from 'next/img'
import { Container, NavLink } from "@theme-ui/components"
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { urlObjectKeys } from "next/dist/shared/lib/utils"
import Accordion from 'react-bootstrap/Accordion'
import Link from 'react-router-dom'

const WalletProviderSection = dynamic(
  () => import("../components/WalletProviderSection/WalletProviderSection"),
  {
    ssr: false,
  }
)

const indicate = {
  indicators: false,
}

const silderBg = {
  backgroundImage: 'url(images/header-bg.png)',
  backgroundSize:'Cover',
  backgroundRepeat: 'no-repeat'
};

const sliderBgSm = {
  backgroundImage: 'url(images/header-bg.png)',
  backgroundSize:'Cover',
  backgroundRepeat: 'no-repeat'
};

const cardHeader = {
  backgroundImage: 'url(images/card-bg.png)',
  color: "#fff"

}

const cardBody = {
  backgroundColor: "#f3f3f3"
}

const padding0 = {
  paddingRight: "0px !important",
  paddingLeft: "0px !important",
}

const accordionItem = {
  border: "none",
  background: "none"
}

const accordionHeader = {
  border: "none",
  background: "none"
}


const accordionBody = {
  paddingLeft: "0px"
}

const accordionButton = {
  background: "#f3f3f3",
  color: "#000",
  paddingLeft: "0px",
  fontSize: "20px",
  borderBottom: "2px solid #000",
}

const accordionButtonLast = {
  background: "#f3f3f3",
  color: "#000",
  paddingLeft: "0px",
  fontSize: "20px"
}

const carouselControlNextIcon = {
  backgroundImage: `url("images/cur-next.png")`
}
const carouselControlPrevIcon = {
  backgroundImage: `url("images/cur-prev.png")`,
}


const Home: NextPage = () => {
  return (


    <div
    // sx={{
    //  // padding: "0 1.6rem",
    // }}
    >

<Head>
        <title>Wealthy Whales</title>
        <meta
          name="description"
          content="Mint NFTs from a candy machine on Solana blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="container-fluid" style={padding0}>

        <header className="p-0 pt-3 pb-5 pb-md-3 mb-4 mb-md-0">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              
              <a href="#" className="d-flex align-items-center mb-4 mb-lg-0 text-dark text-decoration-none">
                <img src="images/logo.png" />
              </a>
              

              <ul className="nav col-12 col-lg-auto ms-1 me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-3 active" style={{ textTransform: "uppercase", fontSize: "16px", fontFamily: "Lato", fontWeight: "bold" }}>Home</a></li>
                <li><a href="#roadmap" className="nav-link px-3 link-dark" style={{ textTransform: "uppercase", fontSize: "16px", fontFamily: "Lato", fontWeight: "bold" }}>Roadmap</a></li>
                <li><a href="#faqs" className="nav-link px-3 link-dark" style={{ textTransform: "uppercase", fontSize: "16px", fontFamily: "Lato", fontWeight: "bold" }}>Faqs</a></li>
                <li><a href="https://discord.gg/wyC4eDrHNd" className="nav-link px-3 link-dark" style={{ textTransform: "uppercase", fontSize: "16px", fontFamily: "Lato", fontWeight: "bold" }}><img src="images/discord.svg" /></a></li>
                <li><a href="https://twitter.com/WealthyWhaleNFT" className="nav-link px-3 link-dark" style={{ textTransform: "uppercase", fontSize: "16px", fontFamily: "Lato", fontWeight: "bold" }}><img src="images/twitter.svg" /></a></li>
              </ul>

            </div>
          </div>
        </header>

        <div className="d-flex align-items-start flex-column" style={silderBg}>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-8">
                <div className="text-white" >
                  <h1 className="display-3 fw-bold">Wealthy Whales </h1>
                  <p className="col-md-8 fs-4 mb-4 mt-4">He’s kind of a big deal…</p>
                  <WalletProviderSection />


                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <img src="images/slider_img.gif" className="img-fluid mx-auto d-none d-md-block" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5" id="roadmap">
          <div className="row align-items-md-stretch">
            <p className="text-center display-5" style={{ fontWeight: "bolder", marginBottom: "0px" }}>Three Stages of the Roadmap</p>
            {/* <p className="text-center pt-2">magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commmodo viverra maecenas accumsan lacus vel facilisis.</p> */}
            <div className="d-flex justify-content-center">
              <div className="col-xl-8 col-xxl-8 col-lg-8 col-md-8 col-sm-12">

                <div className="card my-5">
                  <div className="card-header py-4 text-center" style={cardHeader}>
                    <p className="display-6" style={{ fontWeight: "bolder", marginBottom: "0px" }}>DONE:</p>
                  </div>
                  <div className="card-body p-5 shadow" style={cardBody}>
                    <p className="h4">Artwork:</p>
                    <p className="h6 mb-4">First snobby pod of WealthyWhales swim out of the ocean with their family inheritance. </p>

                    <p className="h4">Website launch:</p>
                    <p className="h6 mb-4">WealthyWhales site launched with FAQ’s, roadmap, and attributes.</p>

                    <p className="h4">Discord:</p>
                    <p className="h6 mb-4">Access to private Discord (Deep Gold Sea) for members of The Whale Society now available.</p>
                  </div>
                </div>

                <div className="card my-5">
                  <div className="card-header py-4 text-center" style={cardHeader}>
                    <p className="display-6" style={{ fontWeight: "bolder", marginBottom: "0px" }}>DOING:</p>
                  </div>
                  <div className="card-body p-5 shadow" style={cardBody}>

                    <p className="h4">Mint:</p>
                    <p className="h6 mb-4">10,000 of the richest whales in the deep blue sea ready to be minted, snatched, and held for ransom.</p>

                    <p className="h4">Marketplace:</p>
                    <p className="h6 mb-4">Setting up a Solana marketplace to trade and re-sell WealthyWhale NFTs.</p>

                    <p className="h4">Special surprise:</p>
                    <p className="h6 mb-4">Special surprise drop for all Whale Society members to be revealed later (when we’ve run out of sea shanties).</p>

                  </div>
                </div>

                <div className="card my-5">
                  <div className="card-header py-4 text-center" style={cardHeader}>
                    <p className="display-6" style={{ fontWeight: "bolder", marginBottom: "0px" }}>GOING TO DO:</p>
                  </div>
                  <div className="card-body p-5 shadow" style={cardBody}>
                    <p className="h4">Open source:</p>
                    <p className="h6 mb-4">We’re working on making the NFT creation tools we’ve built available to the community.</p>

                    <p className="h4">Partnerships:</p>
                    <p className="h6 mb-4">We’re partnering with other Solana ecosystem projects so WealthyWhale holders get nifty bonuses.</p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3 py-5 d-none d-md-block" style={sliderBgSm}>
          <p className="text-center mb-5 display-5" style={{ fontWeight: "bolder", marginBottom: "0px", color: "#fff" }}>Discover Wealthy Whales</p>
          <div className="container-fluid mb-4">
            <Carousel indicators={indicate.indicators} nextIcon={<span style={{ backgroundImage: `url("images/cur-next.png")`, width: '45px', height: '45px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></span>} prevIcon={<span style={{ backgroundImage: `url("images/cur-prev.png")`, width: '45px', height: '45px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></span>}>



              <Carousel.Item>
                <div className="container">
                  <div className="row text-center mt-2">
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                        <div className="p-2"><img src="images/carousel/Boss Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Boss Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-111</p>
                      </div>

                    </div>
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Punk Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Punk Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-112</p>
                      </div>

                    </div>
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Saint Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Saint Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-113</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">
                  <div className="row text-center mt-2">
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                        <div className="p-2"><img src="images/carousel/Vincent Van Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Vincent Van Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-114</p>
                      </div>

                    </div>
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Wacky Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Wacky Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-115</p>
                      </div>

                    </div>
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/White Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">White Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-116</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">
                  <div className="row text-center mt-2">
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                        <div className="p-2"><img src="images/carousel/Wicked Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Wicked Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-117</p>
                      </div>

                    </div>
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Willy the Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Willy the Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-118</p>
                      </div>

                    </div>
                    <div className="col-4 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Boss Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Boss Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-111</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Carousel.Item>

            </Carousel>
          </div>
        </div>

        <div className="rounded-3 pb-5 pt-3 d-md-none" style={sliderBgSm}>
          <div className="container-fluid">
            <Carousel indicators={indicate.indicators} nextIcon={<span style={{ backgroundImage: `url("images/cur-next.png")`, width: '45px', height: '45px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></span>} prevIcon={<span style={{ backgroundImage: `url("images/cur-prev.png")`, width: '45px', height: '45px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></span>}>
              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Boss Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Boss Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-111</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Punk Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Punk Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-112</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Saint Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Saint Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-113</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>


              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Vincent Van Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Vincent Van Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-114</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Wacky Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Wacky Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-115</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/White Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">White Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-116</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Wicked Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Wicked Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-117</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="container">

                  <div className="row text-center mt-2">
                    <div className="col-12 rounded-3">
                      <div className="m-3 bg-white">
                      <div className="p-2"><img src="images/carousel/Willy The Whale.png" className="mb-4 img-fluid" /></div>
                        <p className="h4">Willy The Whale</p>
                        <p className="h6 txt-theme pb-4" style={{ color: "#289EC9" }}>SPL-118</p>
                      </div>

                    </div>

                  </div>

                </div>
              </Carousel.Item>
           
          
            </Carousel>
          </div>
        </div>



      </div>

      <div className="container-fluid py-5" id="faqs" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="row">
          <p className="text-center mb-5 mt- display-5" style={{ fontWeight: "bolder", marginBottom: "0px" }}>Frequently Asked Questions</p>
          <div className="d-flex justify-content-center">
            <div className="col-xl-6 col-xxl-6 col-lg-8 col-md-8 col-sm-12">

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" style={accordionItem}>
                  <Accordion.Button style={accordionButton}>
                  What is WealthyWhales?
                  </Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  A collection of algorithmically generated affluent whales stored on the Solana blockchain. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={accordionItem}>
                  <Accordion.Button style={accordionButton}>Which NFT wallets can I use?</Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  You can use Sollet, Solflare, and Phantom. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={accordionItem}>
                  <Accordion.Button style={accordionButton}>How many WealthyWhales are available?</Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  There will be 10k WealthyWhales available.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={accordionItem}>
                  <Accordion.Button style={accordionButton}>Will the WealthyWhales have special attributes?</Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  Yes, each whale will have its own set of attributes with different rarities. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" style={accordionItem}>
                  <Accordion.Button style={accordionButton}>Is there a Discord? </Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  Yes, members of The Whale Society have access to private members Discord called the Deep Gold Sea. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" style={accordionItem}>
                  <Accordion.Button style={accordionButton}>Do I own this WealthyWhale after purchasing it?</Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  Yes, you will be the sole owner and be given full intellectual properties.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" style={accordionItem}>
                  <Accordion.Button style={accordionButtonLast}>Is there a rarity system?</Accordion.Button>
                  <Accordion.Body style={accordionBody}>
                  Yes, this is important to the collection. There are 5 tiers of rarity: Common, Uncommon, Rare, Epic, and Legendary. Each WealthyWhale will have its own rarity level with attributes of varying rarities.
                  </Accordion.Body>
                </Accordion.Item>


              </Accordion>


            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">

        <div className="row justify-content-md-center mb-4">
          <div className="col-md-12">
            <p className="text-center mb-4 mt-2 display-5" style={{ fontWeight: "bolder", marginBottom: "0px" }}>Team</p>
          </div>
          <div className="col-xl-6 col-xxl-6 col-lg-8 col-md-8 col-sm-12">
            <div className="row text-center mt-2">
              <div className="col-4">
                <div className="p-2">
                  <img src="images/team-1.png" className="border-0 mb-4 img-thumbnail" />
                  <p className="h4 mb-0">Willy The Whale</p>
                  <p className="h6 txt-theme" style={{ color: "#289EC9" }}>CEO</p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2">
                <img src="images/team-2.png" className="border-0 mb-4 img-thumbnail" />
                  <p className="h4 mb-0">Wicked Whale</p>
                  <p className="h6 txt-theme" style={{ color: "#289EC9" }}>COO</p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2">
                <img src="images/team-3.png" className="border-0 mb-4 img-thumbnail" />
                  <p className="h4 mb-0">White Whale</p>
                  <p className="h6 txt-theme" style={{ color: "#289EC9" }}>CTO</p>
                </div>
              </div>
            </div>
            <div className="row text-center mt-5">
              <div className="col-4">
                <div className="p-2">
                <img src="images/team-4.png" className="border-0 mb-4 img-thumbnail" />
                  <p className="h4 mb-0">Wacky Whale</p>
                  <p className="h6 txt-theme" style={{ color: "#289EC9" }}>Lead Artist</p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2">
                <img src="images/team-5.png" className="border-0 mb-4 img-thumbnail" />
                  <p className="h4 mb-0">Vincent Van Whale</p>
                  <p className="h6 txt-theme" style={{ color: "#289EC9" }}>Social Media Manager</p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2">
                <img src="images/team-6.png" className="border-0 mb-4 img-thumbnail" />
                  <p className="h4 mb-0">Saint Whale</p>
                  <p className="h6 txt-theme" style={{ color: "#289EC9" }} >Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <WalletProviderSection /> */}

      <footer className="">
        <div className="container-fluid py-5" style={sliderBgSm} >
          <div className="row align-items-md-stretch">
            <p className="text-center mb-5 text-white display-6" style={{ fontWeight: "bolder", marginBottom: "0px" }}>Follow Us:</p>
            <div className="row justify-content-md-center">
              <div className="col-xl-6 col-xxl-6 col-lg-4 col-md-8">
                <div className="text-center">
                  <a href="https://discord.gg/wyC4eDrHNd" className="p-1 link"><img src="images/discord.png" /></a>
                  <a href="https://twitter.com/WealthyWhaleNFT" className="p-1 link"><img src="images/twitter.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div >
  )
}

export default Home
