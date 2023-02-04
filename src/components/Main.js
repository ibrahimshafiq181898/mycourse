import React, { useEffect, useState } from "react";
import Accordian from "./Accordian";
import "./Sidebar.css";
import Video from "./VideoPlayer";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";

const Main = () => {
  const [apidata, setApiData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    axios
      .get("https://mycourseapp.herokuapp.com/sections")
      .then((res) => {
        setApiData(res.data);
        setSelectedVideo(res.data[0].video_link);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log("ApiData", apidata);

  const handleSectionClick = (video_link) => {
    setSelectedVideo(video_link);
  };
  const selectedSection = apidata.find(
    (section) => section.video_link === selectedVideo
  );
  const courseTitle = selectedSection ? selectedSection.title : "";
  const courseContent = selectedSection ? selectedSection.content : "";
  const handleNextVideo = () => {
    const currentIndex = apidata.findIndex(
      (section) => section.video_link === selectedVideo
    );
    if (currentIndex + 1 < apidata.length) {
      setSelectedVideo(apidata[currentIndex + 1].video_link);
    }
  };

  const handlePrevVideo = () => {
    const currentIndex = apidata.findIndex(
      (section) => section.video_link === selectedVideo
    );
    if (currentIndex - 1 >= 0) {
      setSelectedVideo(apidata[currentIndex - 1].video_link);
    }
  };

  return (
    <div className="main-container">
      <VideoPlayer video_link={selectedVideo} />
      <div className="CourseHeading">
        <div className="titlediv">
          <div className="titlecourse">
            <h3>{courseTitle}</h3>
            <h1>{courseContent}</h1>
          </div>

          <div className="btndiv">
            <button onClick={handlePrevVideo} className="prevbtn">
              <i className="fa fa-angle-left" />
            </button>
            <button onClick={handleNextVideo} className="nextbtn">
              <i className="fa fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="coursedetails">
        <div className="detailmargin">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mattis rhoncus arcu, eu fermentum sapien tincidunt eget. Quisque sit
            amet mauris massa.
          </h5>
          <p>
            Nullam vestibulum gravida diam a fringilla. Nam consequat at nisl
            nec finibus. Vivamus eget mauris sit amet lectus eleifend tempor
            hendrerit quis risus. Mauris in convallis lorem, non laoreet velit.{" "}
            <br />
            Ut nec ante quis arcu porta tempus laoreet eu odio. Maecenas
            consectetur consequat iaculis. Vivamus sed lorem ex. Suspendisse
            potenti. Phasellus aliquet, nulla id accumsan sollicitudin, sem elit
            blandit turpis, a ultrices eros neque vitae dolor.
          </p>
        </div>
      </div>

      <aside className="sidebar">
        <h3 className="sidebar-title">Classes</h3>
        <Accordian sections={apidata} onSectionClick={handleSectionClick} />
      </aside>
    </div>
  );
};

export default Main;
