import { Field } from "./Field"
import { Form } from "./Form"
import { FormProvider } from "./FormProvider"

export const LoginForm = () => { 
  return 
  <FormProvider>
    <Form>
      <Field />
      <Field />
      <button type="submit">Submit</button>
    </Form>
  </FormProvider>
}











// import { Field } from './Field';
// import { Form } from './Form';
// import { FormProvider } from './FormProvider';

// export const LoginForm = () => {
//   return (
//     <FormProvider
//       initialValues={{ login: '', password: '' }}
//       handleSubmit={(values) => console.log(values)}
//     >
//       <Form>
//         <Field name="login" type="text" />
//         <Field name="password" type="password" />
//         <button type="submit">Submit</button>
//       </Form>
//     </FormProvider>
//   );
// };