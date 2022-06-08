import { stringify } from "querystring";
import { TituloStyled,Subtitulo } from "./Titulo.style";

interface TituloProps{
    titulo: string;
    subititulo?: string | JSX.Element;
}

export default function Titulo(props: TituloProps){
    return(
        <>
        <TituloStyled>{props.titulo}</TituloStyled>
        <Subtitulo>{props.subititulo}</Subtitulo>
        </>
    )
}