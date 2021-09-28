// React
import { useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";

// SVG
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

// Folha de estilos
import "../styles/auth.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { UserAuth } from "../hooks/userAuth";

//Firebase
import { database } from "../services/firebase";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = UserAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Sala não existe");
      return;
    }

    if (roomRef.val().endedAt) {
      alert(`Sala encerrada no dia ${new Date(roomRef.val().endedAt).toLocaleDateString('pt-BR')}`);
      return;
    }

    history.push(`rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo da empresa Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
