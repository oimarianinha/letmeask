// React
import { ButtonHTMLAttributes } from "react";

// Folha de estilos
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return <button className="button" {...props}/>;
}