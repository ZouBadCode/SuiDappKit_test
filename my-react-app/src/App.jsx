import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WcBTN } from './component/wcBTN';


const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
      <WalletProvider>
        <WcBTN/>
      </WalletProvider>
    </SuiClientProvider>
  </QueryClientProvider>
  );
}

export default App
