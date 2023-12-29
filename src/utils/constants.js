const GOOGLE_API_KEY = "AIzaSyBG4mFinILEk14dfXCIFNa7PAVZttCEQiU";

export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "https://proxy.cors.sh/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 15;  
