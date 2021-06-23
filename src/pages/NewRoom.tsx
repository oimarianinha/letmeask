// React
import { Link } from 'react-router-dom';

// SVG
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

// Folha de estilos
import "../styles/auth.scss";

// Componentes
import { Button } from "../components/Button";

// Contextos
// import { UserAuth } from "../hooks/userAuth";


export function NewRoom() {
  // const { user } = UserAuth();

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
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
