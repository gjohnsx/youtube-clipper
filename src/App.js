import './App.css';
import downloadClip from './downloadClip';

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

function App() {
  const [url, setUrl] = useState('');
  const [inputStartTime, setInputStartTime] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [inputEndTime, setInputEndTime] = useState('');
  const [endTime, setEndTime] = useState(0);

  // run this function whenever the URL in the input field changes
  useEffect(() => {
    // update the url state variable with the new URL
    setUrl(url);
  }, [url]);


  // helper function to convert a string with minutes and seconds to seconds
  function convertToSeconds(time) {
    // split the time string on 'm' and 's'
    const parts = time.split(/[ms]/).map(Number);

    // calculate the number of seconds in the time string
    const seconds = parts[0] * 60 + parts[1];

    return seconds;
  };

  // helper function to handle changes to the start and end time input fields
  function handleTimeChange(setTime, e) {
    // if the user entered a string with minutes and seconds, convert it to seconds
    if (e.target.value.includes('m') || e.target.value.includes('s')) {
      setTime(convertToSeconds(e.target.value));
    } else {
      setTime(e.target.value);
    }
  };

  return (
    <div>
      <h1>YouTube Clip Downloader</h1>
      <label>
        Enter YouTube URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter start time:
        <input
          type="text"
          value={inputStartTime}
          onChange={(e) => {
            // update the input start time state variable with the user's input
            setInputStartTime(e.target.value);

            // call the handleTimeChange helper function to update the startTime state variable
            handleTimeChange(setStartTime, e);
          }}
        />
      </label>
      <br />
      <label>
        Enter end time:
        <input
          type="text"
          value={inputEndTime}
          onChange={(e) => {
            // update the input end time state variable with the user's input
            setInputEndTime(e.target.value);

            // call the handleTimeChange helper function to update the endTime state variable
            handleTimeChange(setEndTime, e);
          }}
        />
      </label>
      <br />
      
      <h2>
        Clip startTime: {startTime}s - Clip endTime: {endTime}s
      </h2>
      <h2>
        Clip inputStartTime: {inputStartTime}s - Clip inputEndTime: {inputEndTime}s
      </h2>

      <ReactPlayer url={url} controls />
      <br />
      <button
        onClick={() => {
          // download the clip from the specified start and end times
          downloadClip(url, startTime, endTime);
        }}
      >
        Download Clip
      </button>
    </div>
  );
}

export default App;
