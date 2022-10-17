
import { Wrapper, Field, ErrorMessage } from './FormField.styled';

export const FormField = ({label,name}) => {
  return (
    <Wrapper>
      {label && <span>{label}</span>}
      <Field name="cardHolder" />
      <ErrorMessage name={name} component="span" />
    </Wrapper>
  );
};


