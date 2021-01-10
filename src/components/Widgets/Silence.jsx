// import React from 'react'
// import Widget from './Widget';

// const Silence: React.FC<{index: number}> = ({index}) => {
//   return <Widget index={index}>I am the silence!</Widget>;
// };

// export default React.memo(Silence);

import {Component} from 'react';

import './Silence.css';
import {createAudioMeter} from './volumeMeter';
import Button from '../Atoms/Button';
import Widget from './Widget';

export default class ToolSilence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      microphoneActive: false,
      volume: 0,
    };
    this.audioStart = this.audioStart.bind(this);
  }
  audioStart() {
    var audioContext = null;
    var meter = null;

    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    // grab an audio context
    audioContext = new AudioContext();

    const onMicrophoneGranted = (stream) => {
      // Create an AudioNode from the stream.
      mediaStreamSource = audioContext.createMediaStreamSource(stream);

      // Create a new volume meter and connect it.
      meter = createAudioMeter(audioContext);
      mediaStreamSource.connect(meter);

      // kick off the visual updating

      onLevelChange(meter);
    };

    // Attempt to get audio input
    try {
      // monkeypatch getUserMedia
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      // ask for an audio input
      navigator.getUserMedia(
        {
          audio: {
            mandatory: {
              googEchoCancellation: 'false',
              googAutoGainControl: 'false',
              googNoiseSuppression: 'false',
              googHighpassFilter: 'false',
            },
            optional: [],
          },
        },
        onMicrophoneGranted,
        onMicrophoneDenied
      );
    } catch (e) {
      alert('getUserMedia threw exception :' + e);
      return;
    }
    function onMicrophoneDenied() {
      alert('Stream generation failed.');
      return;
    }

    var mediaStreamSource = null;

    const onLevelChange = (meter) => {
      this.setState({volume: meter.volume});
      setTimeout(function () {
        onLevelChange(meter);
      }, 100);
    };
    this.setState({microphoneActive: true});
  }

  render() {
    const {index} = this.props;
    return (
      <Widget className="silence-widget" index={index}>
        <div
          className="silence-widget__volume-bar"
          style={{
            width: `${1000 * this.state.volume}px`,
            backgroundColor: this.state.volume < 0.05 ? '#33C1B1' : '#E76F51',
          }}
        ></div>
        {!this.state.microphoneActive && (
          <Button onClick={this.audioStart}>
            Activa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="microphone-icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="9" y="2" width="6" height="11" rx="3" />
              <path d="M5 10a7 7 0 0 0 14 0" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </Button>
        )}
        {this.state.volume > 0.06 && (
          <div className="silence-widget__silence-icon">
            <span role="img" aria-label="silence icon">
              🤫
            </span>
          </div>
        )}
      </Widget>
    );
  }
}
