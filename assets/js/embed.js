/* global fetch */

const ASPECT_RATIO = 16 / 9
const CHECK_INTERVAL = 1 // min
const TIMEOUT = 5 // seconds
const STREAM_ID = '50148362'
const CLIENT_ID = '5a3ubdltdp7arafxr8ykkz960koksh'

window.addEventListener('resize', resizeEmbedded)
document.addEventListener('DOMContentLoaded', () => {
  resizeEmbedded()
  checkForStream()
  setInterval(checkForStream, CHECK_INTERVAL * 60 * 1000)
})

function resizeEmbedded () {
  const elem = document.querySelector('#embedded-iframe')
  elem.height = elem.offsetWidth / ASPECT_RATIO
}

function checkForStream () {
  console.log('Checking if stream is live...')

  getSteamData()
    .then((data) => {
      if (!('stream' in data)) {
        throw new Error('Malformed reponse from Twitch')
      }

      if (data.stream === null) {
        console.log(' - stream is not live')
      } else {
        console.log(' - stream is LIVE')
        console.log(data.stream)
      }
    })
    .catch((err) => {
      console.warn(` - Could not check stream status, reason '${err.message}'`)
    })
}

function getSteamData (res, err) {
  const url = `https://api.twitch.tv/kraken/streams/${STREAM_ID}`

  return Promise.race([
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': CLIENT_ID
      }
    }),
    new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT * 1000, { timeExpired: true })
    })
  ])
    .then((response) => {
      if (response.timeExpired) {
        throw new TypeError(`NetworkError: timeout after ${TIMEOUT}s`)
      } else if (!response.ok) {
        throw new TypeError(`HTTP Error: ${response.status} - ${response.statusText}`)
      }
      return response.json()
    })
    .then(res)
    .catch(err)
}
