import React, {useEffect} from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toast';

import useFetch from 'hooks/useFetch';
import { Button, FormElement } from 'components';

import schema from '../config/schema';

const slideData = {
  description: '',
  linkToPage: '',
  artistName: '',
};

const StickerbookForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const { response, error, clearError, doFetch } = useFetch();

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
    console.log('data', data);

    // TODO: pass date of creation
    await doFetch((api) => api.stickerbook.create(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormElement>
          <Button text='Add slide' onClick={() => append(slideData)} />
          <Button type='submit' text='Publish' />
        </FormElement>
        <FormElement>
          <input type='text' name='title' placeholder='Title' {...register('title')} />
        </FormElement>
        <div>
          {fields.map((item, index) => (
            <div key={item.id}>
              <Controller
                name={`slides.${index}`}
                control={control}
                render={() => {
                  // const slideErrors = errors['slides'] && errors['slides'][index];

                  return (
                    <div>
                      <FormElement>
                        <input
                          type='text'
                          name={`description-${index}`}
                          placeholder='Slide Description'
                          // error={slideErrors && slideErrors['description']?.message}
                          {...register(`slides[${index}].description`)}
                        />
                      </FormElement>
                      <FormElement>
                        <input
                          type='text'
                          name={`artistName-${index}`}
                          placeholder='Artist Name'
                          // error={slideErrors && slideErrors['artistName']?.message}
                          {...register(`slides[${index}].artistName`)}
                        />
                      </FormElement>
                      <FormElement>
                        <input
                          type='text'
                          name={`linkToPage-${index}`}
                          placeholder='Link to artist page'
                          // error={slideErrors && slideErrors['linkToPage']?.message}
                          {...register(`slides[${index}].linkToPage`)}
                        />
                      </FormElement>
                      <FormElement>
                        <input
                          type='file'
                          name={`image-${index}`}
                          placeholder='Load image'
                          // error={slideErrors && slideErrors['image']?.message}
                          {...register(`slides[${index}].image`)}
                        />
                      </FormElement>
                      <FormElement>
                        <Button text='Delete' onClick={() => remove(index)} />
                      </FormElement>
                    </div>
                  );
                }}
              />
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default StickerbookForm;
