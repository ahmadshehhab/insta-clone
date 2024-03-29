import React from "react";
import NavBar from "../components/NavBar";
import Person from "../Assets/stories/Group 1.png";
import Friend from "../Assets/Ellipse 5.png";
import Friend2 from "../Assets/Ellipse 5.svg";
import Union from "../Assets/stories/Union.png";
import Post from "../Assets/stories/Rectangle 4.png";
import ActivityFeedIcon from "../Assets/navIcons/ActivityFeed.png";
import Message from "../Assets/stories/SharePosts.png";
import Vector from "../Assets/stories/Vector.png";
import Save from "../Assets/stories/Save.png";
const Home = () => {
  return (
    <>
      <div className="black-container">
        <div className="HomeContainer">
          <NavBar />
          <div className="contents">
            <div className="stories">
              <div className="innerStoryContainer">
                {[...Array(35)].map((x) => (
                  <div className="storyItemContainer">
                    <div className="story">
                      <img src={Person} alt="" />
                      <div className="name">ahmad</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row"></div>

            {[...Array(5)].map(() => (
              <>
                <div className="post">
                  <div className="postHeader">
                    <div className="postHeaderLeft">
                      <img src={Person} alt="" />
                      <div className="postname">ahmad</div>
                    </div>
                    <div className="postHeaderRight">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                  <div className="postBody">
                    <img src={Post} alt="" srcset="" />
                  </div>
                  <div className="postBottom">
                    <div className="postBottomIcons">
                      <div className="postBottomLeft">
                        <img src={ActivityFeedIcon} alt="" />
                        <img src={Vector} alt="" />
                        <img src={Message} alt="" />
                      </div>
                      <div className="postBottomRight">
                        <img src={Save} alt="" srcset="" />
                      </div>
                    </div>

                    <div className="likes">123K likes</div>
                    <br />
                    <div className="comments">
                      {[...Array(1)].map(() => (
                        <>
                          <div className="commentItem">
                            <div className="commentOwner">Ahmad</div>
                            <div className="commentMessage">
                              Lorem ipsum dolor sit amet consectetur{" "}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="friends">
            <div className="fItems">
              {[...Array(1)].map(() => (
                <div className="friendItem">
                  <div className="fItemInnerContainer">
                    <div className="fItemLeft special">
                      <img src={Friend2} alt="" />
                    </div>
                    <div className="fItemCenter">
                      <div className="fUsername">ahmad</div>
                      <div className="fname">Ahmad Shehab</div>
                    </div>
                    <div className="fRight">Follow</div>
                  </div>
                </div>
              ))}
              <div className="friendItem label">
                <div className="fItemInnerContainer">

                <div className="labelLeft">Suggestions for you</div>
                <div className="labelRight">See More</div>
                </div>
              </div>
              {[...Array(6)].map(() => (
                <div className="friendItem">
                  <div className="fItemInnerContainer">
                    <div className="fItemLeft">
                      <img src={Friend} alt="" />
                    </div>
                    <div className="fItemCenter">
                      <div className="fUsername">ahmad</div>
                      <div className="fname">Ahmad Shehab</div>
                    </div>
                    <div className="fRight">Follow</div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div className="friendItemInfo">
              <div className="info">
                About . Help . Press . API . Jobs . Privacy . Terms. <br />
                Locations .Language . Meta Verified
                <br />
              </div>
              <br />
              <div className="info">© 2023 INSTAGRAM FROM META</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
