const actionNormal = payload => ({type: 'myAction', payload});

const actionDelay = payload => {
  return dispatch => {
    dispatch(`inició: ${payload}`);
    window.setTimeout(() => dispatch(`terminó: ${payload}`), 1000);
  }
}

const myDispatch = texto => {
  console.log(texto);
}

const payload = "fetching";
const action = actionNormal(payload);

if(typeof action === 'function') {
  console.log("action delay");
  action(myDispatch);
} else {
  console.log("action normal");
  console.log(action);
}