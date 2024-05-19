import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ input ,text}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.lunarPalaceFtKanyeWestWrapper}>
        <b className={styles.lunarPalaceFtContainer}>
          <p className={styles.lunarPalace}>{text}</p>
          <p className={styles.ftKanyeWest}>(ft. Kanye west)</p>
        </b>
      </div>
      <img
  className={styles.inputIcon}
  loading="lazy"
  alt=""
  src={input}
/>

    </div>
  );
};

export default FrameComponent1;
