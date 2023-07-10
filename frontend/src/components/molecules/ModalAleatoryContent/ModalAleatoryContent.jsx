import React, { useContext } from 'react'
import { ContainerModalStyle, ModalAleatoryContentContainerStyles, TitleModalStyle } from './ModalAleratoryContentStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { AiOutlineCloseSquare } from 'react-icons/ai';

const ModalAleatoryContent = ({
    title,
    conditional
}) => {
  const { isOpenModal, setIsOpenModal, setConditionModal, setIsScroll, isScroll } = useContext(GlobalContext);

  const settingConditionModal = ( condition ) => {
    window.scrollTo(0,0);
    setConditionModal(condition)
    setIsScroll(!isScroll);
    setIsOpenModal(!isOpenModal);
  }

  return (
    <ContainerModalStyle isOpenModal={isOpenModal}>
    <ModalAleatoryContentContainerStyles isOpenModal={isOpenModal}>
        <AiOutlineCloseSquare className='iconClose' onClick={() => setIsOpenModal(false)}/>
        <TitleModalStyle>{title}</TitleModalStyle>
        <span>
            {
                conditional ?
                <>
                  <button className='accept' onClick={() => settingConditionModal(true)}>Aceptar</button>
                  <button className='decline' onClick={() => settingConditionModal(false)}>Cancelar</button>
                </>
                : <button className='accept' onClick={() => settingConditionModal(Boolean)}>Aceptar</button>
            }
        </span>
    </ModalAleatoryContentContainerStyles>
    </ContainerModalStyle>
  )
}

export default ModalAleatoryContent