import { Dialog } from 'radix-ui'

import { ImageTitles } from "../../utils/enums";

import logoImg from '../../assets/logo.svg'

import { NewTransactionModal } from '../NewTransactionModal';

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>
          <img src={logoImg} alt={ImageTitles.Logo} />
          <h1>DT Money</h1>
        </span>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
