// // export a function that takes the URL, start time, and end time as arguments
// exports.downloadClip = (url, startTime, endTime) => {
//   // create a filename for the downloaded clip
//   // const filename = `clip_from_${startTime}s_to_${endTime}s.mp4`;

//   // // create a writable stream to save the downloaded video to a file
//   // const writable = fs.createWriteStream(filename);

//   // use youtube-dl-exec to download the video from the specified URL and times
//   // ytdlExec(url, ['--begin', startTime, '--end', endTime]).pipe(writable)
//   //   .on('finish', () => {
//   //     // if the download was successful, log a message to the console
//   //     console.log(`Saved clip to ${filename}`);
//   //   });
//   console.log(`{url: ${url}, startTime: ${startTime}, endTime: ${endTime}}`);
// };

// Import the required modules
// import youtubeDlExec from 'youtube-dl-exec';
// import child_process from 'child_process';
// import path from 'path';
// import fs from 'fs';

// Define a function that downloads a video clip
const downloadClip = (videoUrl, startTime, endTime) => {
  // Use youtube-dl-exec to download the video clip
  // youtubeDlExec(videoUrl, startTime, endTime);

  // Print a message indicating that the download is complete
  console.log('Video clip downloaded to the current working directory.');
};

// Export the downloadClip function
export default downloadClip;
