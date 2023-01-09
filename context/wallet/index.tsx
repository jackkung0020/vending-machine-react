/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useContext } from "react";
export const walletContext = createContext(null);

export const WalletContextProvider: any = ({ children }): any => {
    const [getWallet, setWallet] = useState(null);
    
    const contextValue = {
      getWallet,
      setWallet
    };
    return (
      <walletContext.Provider value={contextValue as any}>
        {children}
      </walletContext.Provider>
    );
  }

export const useWalletContext = () => {
  const context = useContext(walletContext);
  return context;
};