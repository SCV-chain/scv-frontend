import React, { Component, useEffect, useState } from 'react'
import { Container, Image } from 'semantic-ui-react'
import './header.css'
import { Link } from 'react-router-dom'
import {web3Accounts, web3Enable} from "@polkadot/extension-dapp";


function ConnectWallet() {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);
  console.log(Object.keys(accounts).length == 0);
  const extensionSetup = async () => {
    const extensions = await web3Enable('Wallet-connect-tutorial');
    if (extensions.length === 0) {
        setError('No extension installed!');
        return;
    }
    const accounts = await web3Accounts();
    console.log(accounts);
    setAccounts(accounts);
  };
  if (Object.keys(accounts).length != 0) {
    return (<button className="buttonConnectWallet">{accounts[0].address}</button>);
  } else {
    return (
      <button className="buttonConnectWallet" onClick={() => extensionSetup()}>Connect wallet</button>
    )
  }
}


export default function Header() {
  return (
    <div className="headerLandingHome">
      <Container>
        <div className="headerContainer">
          <div className="headerLeft">
            {/* <Image
              src={`${process.env.PUBLIC_URL}/assets/logo-scv.png`}
              className="logoSCV"
            /> */}
            <p className="logoSCV">SMARTCV</p>
          </div>
          <div className="headerCenter">
            <div className="Menu">Home</div>
            <div className="Menu">Team</div>
            <div className="Menu">Docs</div>
          </div>
          <div className="headerRight">
              <ConnectWallet></ConnectWallet>
              <Link to="/login">
                <button className="buttonSignIn">Sign in</button>
              </Link>
              <Link to="/sign-up">
                <button className="buttonSignup">Sign up</button>
              </Link>
            </div>
          </div>
        </Container>

      <div className="headerButton">
        <div className="headerButtonUpLoad">UPLOAD SCHOLARSHIP</div>
        <div className="headerButtonPostJob">POST JOB</div>
        <div className="headerButtonCreateCV">CREATE CV</div>
      </div>
    </div>
  )
}
