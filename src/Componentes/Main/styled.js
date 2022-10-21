import styled from "styled-components"

export const Main1 = styled.main`

  min-height: 80%;
  display: flex;


nav {
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
  
}

nav > ul {
  list-style-type: none;
}

.painel-de-videos {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
}

.box-pagina-principal > img {
  width: 100%;
  height: 200px;
}



`



 