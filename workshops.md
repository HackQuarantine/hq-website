---
title: Workshop Host Info
layout: plain
styles:
  - url: https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.4.1/darkly/bootstrap.min.css
    hash: sha384-rCA2D+D9QXuP2TomtQwd+uP50EHjpafN+wruul0sXZzX/Da7Txn4tB9aLMZV4DZm
  - url: /assets/css/resources.css
---
---

## Information for Workshop Hosts

Workshops will be live streamed onto our [Twitch.TV](https://twitch.tv/hackquarantine) channel.

There's 3 ways to do your workshop. Pick which ever you feel comfortable doing!

1. Perform workshop live (we call this "livestreaming")
2. Play workshop video live from your computer (with the option to pause for questions) (we call this "hybrid")
3. Send us the pre-recorded video and we will play for you (we call this "pre-recorded")

Please inform a member of the `@Live Streaming Team` on our [Discord]({{ page.socials. discord }}) server of which option you have chosen. Make sure you do this as soon as possible. If you leave it too late, we may not be able to run your workshop!

## Required Software
[Open Broadcasting Software (OBS)](https://obsproject.com/) allows you to livestream or record the content of your screen. If you have chosen option 1 or 2 (livestreaming/hybrid), you will need to use this software to stream your workshop to us.

It can also record the content of your screen to a video file, and we recommend using it to prepare pre-recorded versions of your workshop for options 2 and 3. However if you already have a video of your workshop and have chosen option 3, then OBS is not required as you can directly upload the video file to us!

## Methods

### 1. Livestreaming

1. Download and install [Open Broadcasting Software (OBS)](https://obsproject.com/)
2. Open OBS
3. Create a scene
4. Add a Display Capture or Window Capture source
5. Add an Audio Input Capture source for microphone
6. Optionally: if you’re on a Mac, follow [this guide](https://obsproject.com/forum/resources/os-x-capture-audio-with-ishowu-audio-capture.505/) to capture system audio.
7. Open OBS settings to add the `Server` and `Stream Key` (see below)
8. Press the `Start Streaming` button


We will be sending you a Stream Key and Upload URL via Discord before the event. Make sure to give your Discord username to Karl.

Example Discord username: `wrussell1999#6267`

<img src="assets/img/workshops/obs_settings.png" height="400">

### 2. Hybrid

This option is useful if you don't want to perform your workshop live, but want to be able to **pause the workshop** to take questions / answer questions from hackers in the Twitch chat. This enables some of the audience participation that is possible with a full live workshop, but without the risk of technical issues with your code/talk.

This will guide you on how to record your screen so you can show off slides, and code easily. You can also clean it up in editing later if you want.

1. Follow the same instructions as #1 up to 6 but instead of `Start Streaming`, press `Start Recording`.
2. If you want to edit your workshop, there's a few different types of video editing software you can use (unless you're familiar):
    - [OpenShot](https://www.openshot.org/) (Windows, macOS, Linux)
    - iMovie (macOS only)
3. Follow the instructions [here](https://www.youtube.com/watch?v=hf457tY10MA) to setup OBS to replay your video.
4. For live streaming, insert your stream key as mentioned above and press `Start Streaming`
5. Switch to your scene you setup in step 3, and your video should start automatically playing.

### 3. Pre-recorded

If you don't want to pause your video to take questions, this will be the easiest option. Please make sure that your content is uploaded at minimum 1 hour prior to your assigned timeslot, or we may not be able to play it.

1. Follow the same instructions as #2 up to part 2.
2. Export your video as an `.mp4` (else it won't work).
3. You will be provided with a upload url as mentioned above. Click it, select the file, and once uploaded you're done!
4. If you have not pre-agreed that your content will be pre-recorded, please notify an organizer so that arrangements can be made to play your content during your assigned timeslot.

## What are stream keys & where do I find mine?
If you are livestreaming your workshop (options 1 & 2), you will need to configure OBS so that it connects to our servers. To do this you will need a stream key (also called a token). As a workshop host, you should receive a 1 message per workshop you are running from our `Workshop Key Bot`. It will look like this:


<img style="max-width: 100%;" src="/assets/img/workshops/bot_message.png"/>

`OBS URL` is what you should put in the server input in OBS. `OBS Token` is what you should put in the stream key input in OBS.


#### Testing your Livestream setup

We recommend that prior to the start of your workshop, you test your livestream configuration is able to connect to the ingest server using the following guide:

NOTE: your stream key is only valid *1 hour before*, during and *1 hour after* your workshop

  1. Follow either of the two guides above to configure your streaming setup
  2. Set your custom RTMP url to rtmp://geosmin.hack.productions/test
  3. Press 'Start Streaming'
  3. Go to https://geosmin.hack.productions/test
  4. Confirm that the video and audio you are expecting to be streamed is replayed in your browser
