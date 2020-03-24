/* global $, fetch */

const ASPECT_RATIO = 16 / 9
const CHECK_INTERVAL = 60 // seconds
const TIMEOUT = 5 // seconds
const CHANNEL_ID = '500005029'
const CLIENT_ID = '5a3ubdltdp7arafxr8ykkz960koksh'

let stream = false

window.addEventListener('resize', resizeIframes)
document.addEventListener('DOMContentLoaded', () => {
  checkForStream()
  setInterval(checkForStream, CHECK_INTERVAL * 1000)
  $('#embedded-content').click(() => {
    if (stream) {
      window.location.href = 'https://www.twitch.tv/hackquarantine'
    }
  })
})

function resizeIframes () {
  for (const frame of ['#embedded-iframe', '#embedded-schedule']) {
    const elem = document.querySelector(frame)
    elem.height = elem.offsetWidth / ASPECT_RATIO
  }
}

function displayStreamStatus (online, fullName) {
  if (online) {
    let eventName = /Hack Quarantine - (.*)/.exec(fullName)

    if (eventName === null) {
      eventName = fullName
    } else {
      eventName = eventName[1]
    }

    const eventLive = eventName !== 'Online Hackathon!'

    if (eventLive) {
      showStream(eventName)
    } else {
      showSchedule()
    }
  }

  setEmbedVisibility(online)
}

function setEmbedVisibility (show) {
  if (show) {
    $('#embedded-viewer').css('display', 'block')
  } else {
    $('#embedded-viewer').css('display', 'none')
  }
  resizeIframes()
}

function showStream (title = '') {
  if (!stream) {
    stream = true
    $('#embedded-status-icon').css('color', 'red')
    $('#embedded-status-text').text('LIVE - ')
    $('#embedded-title').text(title)

    $('#embedded-iframe').attr('src', 'https://player.twitch.tv/?channel=hackquarantine&muted=1')
    $('#embedded-iframe').css('display', 'block')
    $('#embedded-schedule').css('display', 'none')
    resizeIframes()
  }
}

function showSchedule () {
  stream = false
  $('#embedded-status-icon').css('color', 'gray')
  $('#embedded-status-text').text('Intermission - ')
  $('#embedded-title').text('Upcoming Events')

  $('#embedded-iframe').removeAttr('src')
  $('#embedded-iframe').css('display', 'none')
  $('#embedded-schedule').css('display', 'block')
  resizeIframes()
}

function checkForStream () {
  console.log('Checking if stream is live...')

  getSteamData()
    .then((data) => {
      if (!('streams' in data)) {
        throw new Error('Malformed reponse from Twitch')
      }

      if (data.streams.length === 0) {
        console.log(' - stream is not live')
        displayStreamStatus(false)
      } else {
        console.log(' - stream is LIVE')
        const name = data.streams[0].channel.status
        console.log(` - title is '${name}'`)

        displayStreamStatus(true, name)
      }
    })
    .catch((err) => {
      console.warn(` - Could not check stream status, reason '${err.message}'`)
    })
}

function getSteamData (res, err) {
  const url = `https://api.twitch.tv/kraken/streams/?channel=${CHANNEL_ID}`

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
