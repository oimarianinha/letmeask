// SVG
import copyImg from "../assets/images/copy.svg";

// Folha de estilos
import "../styles/room-code.scss";

type RoomCodeType = {
  code: string;
};

export function RoomCode(props: RoomCodeType) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
