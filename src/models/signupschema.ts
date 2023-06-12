import * as yup from 'yup';

export const signupschema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
