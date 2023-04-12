import ParagrafoComponent from '../../components/Paragrafo'

import * as S from './styles'

const Header = () => {
  return (
    <S.Content>
      <h1>Lista de contatos</h1>
      <ParagrafoComponent>
        Tenha sua agenda de contatos sempre atualizada, e edite quando quiser!
      </ParagrafoComponent>
    </S.Content>
  )
}
export default Header
