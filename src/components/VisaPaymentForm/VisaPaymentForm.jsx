import { Formik } from 'formik';

import{Form} from '../Form/Form'
import { FormField } from '../FormField/FormField'
import {paymentScema} from '../../validation'

const initialValues = {
  cardHolder: '',
  cardNumber: '',
  cvv: '',
};

export const VisaPaymentForm = () => {

    const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return(
    <Formik
      initialValues={initialValues}
      validationScema={paymentScema}
      onSubmit={handleSubmit}
    >
      {({isSubmitting }) => 
       (
          <Form>
            <FormField label="Card holder" name="Card holder" />
            <FormField label="Card number" name="Card number" />
            <FormField label="CVV" name="cvv" />
            <button type='submit' disabled={isSubmitting} >Pay</button>
            {isSubmitting ? 'Attempting to pay...' : 'Pay'}
          </Form>
        )
      }
      
    </Formik>)
}