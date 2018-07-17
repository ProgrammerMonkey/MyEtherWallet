import nodeList from '@/configs/networks'
const state = {
  web3: {},
  network: {
    chainId: 1,
    url: 'https://api.myetherwallet.com/eth',
    port: 80,
    username: null,
    password: null,
    tokens: [],
    contracts: []
  },
  wallet: null,
  account: {
    balance: 0
  },
  Transactions: {},
  Networks: nodeList,
  Errors: {},
  online: true,
  pageStates: {
    pageLocation: '',
    sendOffline: {
      processLocation: 'process1'
    },
    txSideMenu: {
      send: false,
      sendEth: false,
      sendOffline: false,
      swap: false,
      dapps: false,
      contract: false,
      interactContract: false,
      deployContract: false
    },
    activeMenuSetter: function (theMenuNames) {
      this.txSideMenu.send = false
      this.txSideMenu.sendEth = false
      this.txSideMenu.sendOffline = false
      this.txSideMenu.swap = false
      this.txSideMenu.dapps = false
      this.txSideMenu.contract = false
      this.txSideMenu.interactContract = false
      this.txSideMenu.deployContract = false
      for (var i = 0; i < theMenuNames.length; i++) {
        this.txSideMenu[theMenuNames[i]] = true
      }
    }
  },
  gasPrice: 41
}

export default state
