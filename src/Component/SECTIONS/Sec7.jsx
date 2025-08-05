import React from "react";
import { useEffect, useContext, useState } from "react";

const Sec7 = () => {
  var [vid, setvid] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyA82 - Q9AGMeIZaddXOLFYsZSDvWrgfjHgw"
    )
      .then((response) => response.json())
      .then((data) => {
        var youtubevideos = data.items;
        setvid(youtubevideos);
      });
  }, []);

  return (
    <div>
      <section className="sec-7">
        <div className="AllVideoRappers">
          <div className="Container ">
            <div className="row ">
              <div className="col-12 ">
                <div className="Title-Wraper">
                  Latest Video <br /> <br />
                </div>
                <div className="colll">
                  <div className="col-sm-12 TotRapper">
                    {vid.map((singlevideo) => {
                      var vidId = singlevideo.id.videoId;
                      var vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                      var vidWrapper = (
                        <div className="SingleVid">
                          <div className="Video-Thumbnail">
                            <a href={vidLink}>
                              <img
                                src={singlevideo.snippet.thumbnails.high.url}
                              />
                            </a>
                          </div>
                          <div className="VideoInfoWraper">
                            <div className="VideoTitle">
                              <a href={vidLink}>{singlevideo.snippet.title}</a>
                            </div>
                            <div className="VideoDescription">
                              {singlevideo.snippet.description}
                            </div>
                          </div>
                        </div>
                      );
                      return vidWrapper;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec7;

// key: -  AIzaSyA82 - Q9AGMeIZaddXOLFYsZSDvWrgfjHgw
// app - Id: - UCE_M8A5yxnLfW0KghEeajjw

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyA82 - Q9AGMeIZaddXOLFYsZSDvWrgfjHgw
