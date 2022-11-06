

export const Field = ({ type = 'text'}) => {
  return <input type={type} />
}











// import { useForm } from './FormProvider.jsx';

// export const Field = ({ type = 'text', name }) => {
//   const ctx = useForm();
//   console.log(`form context value inside Field`, ctx);

//   return (
//     <input
//       type={type}
//       value={ctx.state[name]}
//       onChange={(e) => ctx.handleChange(name, e.target.value)}
//     />
//   );
// };