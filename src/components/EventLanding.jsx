import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventLanding.module.css";
import LogosComponent from "./LogosComponent";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const EventLanding = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // const onEventsTextClick = useCallback(() => {
  //   navigate("/event-landing");
  // }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.eventLanding}>
      <h1 className={styles.astrixEvents}>
        <span className={styles.astrixEventsTxtContainer}>
          <p className={styles.astrix}>ASTRIX</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.events}>EVENTS</p>
        </span>
      </h1>
      <div className={styles.eventLandingInner}>
        <div className={styles.frameParent}>
          <div className={styles.astrixBrandingParent}>
            <img
              className={styles.astrixBrandingIcon}
              loading="lazy"
              alt=""
              src="/—Pngtree—a logo simple and minimalistic_5009139.png"
            />
            <div className={styles.astrixWrapper}>
              <h3 className={styles.astrix1}>Astrix.</h3>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.eventsWrapper}>
              <div className={styles.events1}>
                <div className={styles.image13Parent}>
                  <img
                    className={styles.image13Icon}
                    alt=""
                    src="https://i.pinimg.com/736x/53/74/f1/5374f1aacb5108f7bce1f44454139f64.jpg"
                  />
                  <h1 className={styles.eventName}>Event Name</h1>
                  <div className={styles.iconsParent}>
                    <img
                      className={styles.icons}
                      loading="lazy"
                      alt=""
                      src="https://i.pinimg.com/564x/61/04/28/610428721060a3e52e67e032a00c0016.jpg"
                    />
                    <div className={styles.location}>Location</div>
                  </div>
                </div>
                <div className={styles.image13Parent}>
                  <img
                    className={styles.image13Icon}
                    alt=""
                    src="https://i.pinimg.com/564x/36/da/ba/36dabae6a26bb35b484fbd4339c4c6c2.jpg"
                  />
                  <h1 className={styles.eventName}>Event Name</h1>
                  <div className={styles.iconsParent}>
                    <img
                      className={styles.icons}
                      loading="lazy"
                      alt=""
                      src="https://i.pinimg.com/564x/61/04/28/610428721060a3e52e67e032a00c0016.jpg"
                    />
                    <div className={styles.location}>Location</div>
                  </div>
                </div>
                <div className={styles.image13Parent}>
                  <img
                    className={styles.image13Icon}
                    alt=""
                    src="https://i.pinimg.com/736x/14/09/f7/1409f7739d0adb50f5f7d38821eef97e.jpg"
                  />
                  <h1 className={styles.eventName}>Event Name</h1>
                  <div className={styles.iconsParent}>
                    <img
                      className={styles.icons}
                      loading="lazy"
                      alt=""
                      src="https://i.pinimg.com/564x/61/04/28/610428721060a3e52e67e032a00c0016.jpg"
                    />
                    <div className={styles.location}>Location</div>
                  </div>
                </div>
                <div className={styles.image13Parent}>
                  <img
                    className={styles.image13Icon}
                    alt=""
                    src="https://i.pinimg.com/736x/21/52/74/2152741bedc6922604b557a055bc0783.jpg"
                  />
                  <h1 className={styles.eventName}>Event Name</h1>
                  <div className={styles.iconsParent}>
                    <img
                      className={styles.icons}
                      loading="lazy"
                      alt=""
                      src="https://i.pinimg.com/564x/61/04/28/610428721060a3e52e67e032a00c0016.jpg"
                    />
                    <div className={styles.location}>Location</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toggleLandingPage}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameInner} onClick={onFrameClick1} />
                <div className={styles.rectangleDiv} />
                <b className={styles.events2}>Events</b>
                <b className={styles.collections} onClick={onFrameClick1}>
                  Collections
                </b>
              </div>
              <div className={styles.toggleLandingPageChild} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rollParent}>
        <div className={styles.rollIcon}>
          <LogosComponent />
        </div>
        <div className={styles.artistLineupWrapper}>
          <h3 className={styles.artistLineup}>Artist Lineup</h3>
        </div>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameIcon}
            alt=""
            src="https://i.pinimg.com/564x/b3/40/38/b3403839c72e2cbd56a0056a96be117a.jpg"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="https://i.pinimg.com/564x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg"
          />
        </div>
        <img
          className={styles.image131Icon}
          loading="lazy"
          alt=""
          src="https://i.pinimg.com/564x/d8/11/10/d81110f74b45542aa26eddc290592ed8.jpg"
        />
      </div>
      <div className={styles.exploreYoureFirstEventParent}>
        <h3 className={styles.exploreYoureFirst}>Explore Youre First Event</h3>
        <div className={styles.eventNameParent}>
          <h1 className={styles.eventName1}>Event Name</h1>
          <div className={styles.iconsGroup}>
            <img
              className={styles.icons1}
              alt=""
              src="https://i.pinimg.com/564x/06/2a/67/062a6770fd51f1ffbebeda03e21a2334.jpg"
            />
            <img
              className={styles.icons2}
              alt=""
              src="https://i.pinimg.com/564x/81/0a/78/810a78d224e2c2b56b14095d10138ea2.jpg"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.venueParent}>
                <div className={styles.venue}>Venue</div>
                <div className={styles.div}>04/3/2024 @19:00</div>
              </div>
            </div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetConWrapper}>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="https://i.pinimg.com/564x/da/85/ab/da85ab0e7a81855b308cd6d66116ed60.jpg"
          />
        </div>
        <div className={styles.joinNowWrapper}>
          <div className={styles.joinNow}>
            <b className={styles.joinWaitlist}>Join Waitlist</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLanding;
