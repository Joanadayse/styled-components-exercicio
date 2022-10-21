import {Cabecalho} from "../Header/styled"


export function Header (props){

    return (

        <Cabecalho>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Cabecalho>
    )
}