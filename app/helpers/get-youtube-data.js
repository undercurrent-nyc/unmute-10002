import fetch from "fetch";
import ENV from "unmute/config/environment";

export default async function getYoutubeData(id) {
  const queryUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${ENV.YOUTUBE_API_KEY}`;
  const response = await fetch(queryUrl);
  const data = await response.json();
  if(data.items.length > 0){
    return {
      title: data.items[0].snippet.title,
      description: data.items[0].snippet.description.split("\n")[0]
    }
  }

  return {
    title: `Title of Video ${id}`,
    description: `Description of Video ${id}`
  };
};


