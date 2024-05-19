'use client';
import { useEffect, useState } from 'react';
import { loginWeb3 } from 'web3-auth';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import { useWeb3Modal, useWeb3ModalEvents } from '@web3modal/wagmi/react';
import { useRouter } from 'next/navigation';

import { DEFAULT_PATH, GHOST_DRIVE_API, NEIRA_AI_API } from '@/app/config';

const useWalletConnect = () => {
  const account = useAccount();
  const { open } = useWeb3Modal();
  const events = useWeb3ModalEvents();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const router = useRouter();

  const [check, setCheck] = useState(false);

  useEffect(() => {
    disconnect();
    setCheck(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (check) {
      if (
        events?.data?.event === 'CONNECT_SUCCESS' ||
        events?.data?.event === 'MODAL_CLOSE'
      ) {
        if (account.isConnected && account.address) {
          walletConnect(account.address);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, check]);

  const walletConnect = async (publicAddress: `0x${string}`) => {
    try {
      const response = await loginWeb3({
        publicAddress,
        NEYRA_AI_API: NEIRA_AI_API,
        GHOST_DRIVE_API,
        signMessageAsync,
        autoRedirect: false,
      });
      router.push(response.isNewUser ? '/welcome' : DEFAULT_PATH);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWalletConnect = async () => {
    if (account.isConnected) {
      disconnect();
    }
    await open({ view: 'Connect' });
  };

  return handleWalletConnect;
};

export default useWalletConnect;
