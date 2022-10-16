// import { Component } from 'react';

import {paymentMethods} from 'constants'
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { Container, Button } from './PaymentMethods.styled';



export const PaymentMethods =({selected,onSelect}) => {

    return(
      <Container>
        <Button
            selected={selected === paymentMethods.mastercard}
            onClick={() => onSelect(paymentMethods.mastercard)}
        >
            <FaCcMastercard size={24} /> Mastercard
        </Button>
        <Button
            selected={selected === paymentMethods.visa}
            // добавляет или меняет в стейт виза
            onClick={() => onSelect(paymentMethods.visa)}
        >
            {/* при нажатии меняем цвет  */}
          <FaCcVisa size={24} /> Visa
        </Button>
        <Button
            selected={selected === paymentMethods.applepay}
            onClick={() => onSelect(paymentMethods.applepay)}
        >
          <FaCcApplePay size={24} /> Apple Pay
        </Button>
      </Container>)
    
}

