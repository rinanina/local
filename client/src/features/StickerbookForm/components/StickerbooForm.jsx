import React, {useEffect} from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toast';

import useFetch from 'hooks/useFetch';

import schema from '../config/schema';

const slideData = {
  description: '',
  linkToPage: '',
  artistName: '',
};

const StickerbookForm = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({ resolver: yupResolver(schema) });
  const { response, error, clearError, doFetch } = useFetch();

  console.log('errors', errors);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearError();
    }

    if (response) {
      const { message } = response.data;

      toast.success(message);
    }
  }, [error, response]);

  const { fields, append, remove } = useFieldArray({ name: 'slides', control });

  const onSubmitHandler = async (data) => {
    await doFetch((api) => api.stickerbook.create(data));
    console.log('data', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <button type="submit">Publish</button>
        <input type='text' name='title' placeholder='Title' {...register('title')} />
        {errors['title'] && <span>{errors['title'].message}</span>}
        <button onClick={() => append(slideData)}>Add slide</button>
        <div>
          {fields.map((item, index) => (
            <div key={item.id}>
              <Controller
                name={`slides.${index}`}
                control={control}
                render={() => (
                  <div>
                    <div>
                      <input type='text' name={`description-${index}`} placeholder='Description' {...register(`slides[${index}].description`)} />
                      {errors['slides'] && errors['slides'][index]['description'] && <span>{errors['slides'][index]['description'].message}</span>}
                      <input type='text' name={`artistName-${index}`} placeholder='Name' {...register(`slides[${index}].artistName`)} />
                      {errors['slides'] && errors['slides'][index]['artistName'] && <span>{errors['slides'][index]['artistName'].message}</span>}
                      <input type='text' name={`linkToPage-${index}`} placeholder='Link' {...register(`slides[${index}].linkToPage`)} />
                      {errors['slides'] && errors['slides'][index]['artistName'] && <span>{errors['slides'][index]['artistName'].message}</span>}
                      <input type='file' name={`image-${index}`} {...register(`slides[${index}].image`)} />
                    </div>
                    <button onClick={() => remove(index)}>Delete</button>
                  </div>
                )}
              />
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default StickerbookForm;
