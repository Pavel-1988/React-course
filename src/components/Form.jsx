
export const Form = ({ }) => {
  return <form >Form</form>;
}







// import { useForm } from './FormProvider.jsx';

// export const Form = ({ children }) => {
//   const ctx = useForm();
//   console.log(`form context value inside Form`, ctx);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     ctx.handleSubmit('some form values');
//   };

//   return <form onSubmit={handleSubmit}>{children}</form>;
// };