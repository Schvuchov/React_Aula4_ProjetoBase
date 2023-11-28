import {Container, Image, Title, Span, Paragraph } from "./styles.js"

import img1 from '../../imgs/img1.jpg'

export function Main(){
    return(
        <Container>
            <Image>
                <img src={img1} alt="Imagem da Main" />
            </Image>
            
            <Title>Lorem ipsum sit <Span>amet</Span>. Harum corporis!</Title>
            <Paragraph>
                Lorem ipsum dolor, sit ametis veniam fugiat optio q <strong>consectetur</strong> uidem minima vel ea!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolorelit iusto?
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing eliti ipsam odio aut deleniti obcaecati mollitia error quas quisquam?
            </Paragraph>
        </Container>
    )
}