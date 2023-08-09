import * as yup from 'yup';

export default yup.object().shape({
  type: yup.string().required(),
});
