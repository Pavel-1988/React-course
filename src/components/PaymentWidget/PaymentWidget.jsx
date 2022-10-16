import { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods'
import {paymentMethods} from 'constants'

export class PaymentWidget extends Component {

    state = {
      selectedMethod: null,
      // єто будет вид оплаті кторій перезапишется в состоянии , мі увидим в девтулзах
  };

    selectPaymentMethod = (method) => {
      this.setState({
        selectedMethod: method,
      });
  };

  render() {
    const { selectedMethod } = this.state
    return (
      <Container>
        <PaymentMethods
          selected={selectedMethod}
          onSelect={this.selectPaymentMethod}
          />
           {selectedMethod === paymentMethods.visa && <div>Visa form</div>}
            {selectedMethod === paymentMethods.mastercard && (
              <div>Mastercard form</div>
            )}
            {selectedMethod === paymentMethods.applepay && (
              <div>Apple Pay form</div>
            )}
      
      </Container>
    )
  }
  

}