import { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods'
import { paymentMethods } from 'constants'
import { VisaPaymentForm } from '../VisaPaymentForm/VisaPaymentForm'
import {MasterCardPaymentForm} from '../MasterCardPaymentForm/MasterCardPaymentForm'

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
           {selectedMethod === paymentMethods.visa && <VisaPaymentForm />}
            {selectedMethod === paymentMethods.mastercard && (<MasterCardPaymentForm />
            )}
            {selectedMethod === paymentMethods.applepay && (
              <div>Apple Pay form</div>
            )}
      
      </Container>
    )
  }
  

}