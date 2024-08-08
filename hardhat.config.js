require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://linea-sepolia.infura.io/v3/${process.env.API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 59141, // Ensure this matches the correct chain ID for Linea Sepolia
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "linea-sepolia",
        chainId: 59141, // Linea Sepolia chain ID
        urls: {
          apiURL: "https://api.linea-sepolia.io/api", // Replace with Linea Sepolia's actual API URL if available
          browserURL: "https://explorer.linea-sepolia.io", // Replace with the block explorer URL if available
        },
      },
    ],
  },
  sourcify: {
    enabled: false, // Disable Sourcify verification
  },
};
