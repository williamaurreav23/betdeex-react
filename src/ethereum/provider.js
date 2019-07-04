const ethers = require('ethers');

const state = window.reduxStore.getState();

if(!Object.entries(state.providerInstance).length) {
  window.reduxStore.dispatch({
    type: 'LOAD-PROVIDER-INSTANCE',
    payload: new ethers.providers.InfuraProvider('rinkeby')
  });
}

const newState = window.reduxStore.getState();

export default newState.providerInstance;