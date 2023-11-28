import {Container, Line, ImgFooter} from "./styles.js"

import wave from '../../imgs/wave.png'
import { Menu } from '../Menu'

export function Footer(){
    return(
        <Container>
            <Line/>
            
            {/* Menu */}
            <Menu/>

            <ImgFooter src={wave} alt="imagem de fundo do footer" />
        </Container>
    )
}