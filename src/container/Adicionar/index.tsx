import * as S from './styles'

import imagemVetor from '../../images/vector-edit.png'

import BotaoAdicionar from '../../components/BotaoAdicionar'

const Adicionar = () => {
  return (
    <S.Content>
      <S.ImageContainer>
        <img src={imagemVetor} />
      </S.ImageContainer>
      <div>
        <BotaoAdicionar />
      </div>
    </S.Content>
  )
}

export default Adicionar
