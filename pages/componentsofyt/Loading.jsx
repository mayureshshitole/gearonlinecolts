import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_dcNDe1.json"
        style={{ height: "100px", width: "100px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default Loading;
