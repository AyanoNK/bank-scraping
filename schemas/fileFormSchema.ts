import * as yup from 'yup';

export default yup.object().shape({
  b64string: yup.string().required(),
});
