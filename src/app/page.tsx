"use client";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { inAppWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ConnectButton 
      client={client}
      wallets={[
        inAppWallet({
          auth: {
            options: [
              "discord",
              "coinbase",
              "farcaster",
              "email",
              "guest",
              "google",
            ]
          }
        })
      ]}
      accountAbstraction={
        {
          chain: defineChain(1320),
          sponsorGas: true,
        }
      }
      />
    </div>
  );
}
