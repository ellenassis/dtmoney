import React from 'react'
import { Container } from './styles';

import arrowUp from '../../assets/income.svg'
import arrowDown from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={arrowUp} />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={arrowDown} />
        </header>
        <strong>- R$ 1.259,00</strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={total} />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  )
}
