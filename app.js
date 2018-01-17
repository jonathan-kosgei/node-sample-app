/*new Promise((resolve, reject) => {
    console.log('started')
       // never resolves or rejects
    })
*/
function * makeCounter () {
  let i = 0;
  while (true) {
    yield ++i;
  }
}
makeCounter()
