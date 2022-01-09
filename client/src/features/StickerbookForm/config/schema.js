import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string(), // TODO: make it required
  slides: Yup.array().of( // TODO: make one item required
    Yup.object().shape({
      description: Yup.string(),
      artistName: Yup.string(),
      linkToPage: Yup.string(),
      image: Yup
        .mixed()
        .required('Image is required')
    })
  )
});

export default schema;


