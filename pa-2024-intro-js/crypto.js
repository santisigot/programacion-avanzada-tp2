const apikey = '68f0f6be-bd1e-4d03-904b-3ef28d12ccce'
const url = `https://rest.coinapi.io/v1/exchanges`
const headers = new Headers({
  'X-CoinAPI-Key': apikey
});
fetch(url, { headers })
  .then(resp => resp.json())
  .then(data => {
      const exchanges = data.slice(0, 16)
      
      let content = ''
      exchanges.forEach(exchange => {
          const text = `Name: ${exchange.name}\nVolume 1hr USD: ${exchange.volume_1hrs_usd.toFixed(2)}\nVolume 1day USD: ${exchange.volume_1day_usd.toFixed(2)}\n\n`
          content += text
      });
      document.body.innerHTML = `<pre>${content}</pre>`
  })
  .catch(console.warn)















// peticion
// .then(resp => resp.json())
//    .then(data => {
//      data.forEach(exchange=> {
//        console.log(exchange.exchange_id);
//        console.log(exchange.volume_1hrs_usd);
//       console.log(exchange.volume_1day_usd);
//      });
//    })
//    .catch(console.warn);


  











