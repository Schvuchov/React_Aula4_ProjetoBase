import { Links, LinkItem} from "./styles.js"

export function Menu(){
    return(
        <Links>

            <LinkItem target="_black" href="/">
                Home
            </LinkItem>

            <LinkItem target="_black" href="/pagina1">
                Pagina1
            </LinkItem>

            <LinkItem target="_black" href="/pagina2">
                Pagina2
            </LinkItem>

            <LinkItem href="/pagina3">
                Pagina3
            </LinkItem>

        </Links>
    )
}