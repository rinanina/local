import React, { useEffect, useState, FC } from 'react';
import styled from 'styled-components';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toast';

import useFetch from 'hooks/useFetch';
import { Button, FormElement } from 'components';

import schema from '../../config/schema';

const slideData = {
  description: '',
  linkToPage: '',
  artistName: '',
};

type TProps = {
  data: any;
};

const StickerBookForm: FC<TProps> = ({ data }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const { response, error, clearError, doFetch } = useFetch<any>();
  const [values, setValues] = useState<Partial<Record<string, string>>>({});

  // TODO: update image when new file loaded

  useEffect(() => {
    setValues(data);
  }, [data]);

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

  useEffect(() => {
    if (data?.slides.length) {
      data.slides.forEach((slide: any) => {
        append(slide);
      });
    }
  }, [data]);

  // TODO: fix so data will be send only on submit and not slide add
  const onSubmitHandler = async (data: any) => {
    console.log('onSubmitHandler');
    console.log('data', data);

    await doFetch((api) => api.stickerbooks.create(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormElement>
          <Button text='Add slide' onClick={() => append(slideData)} />
        </FormElement>
        <FormElement>
          <Button text='Publish' onClick={() => console.log('submit form')} />
        </FormElement>
        <FormElement>
          <input type='text' defaultValue={values?.title} placeholder='Title' {...register('title')} />
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
                        <textarea
                          placeholder='Slide Description'
                          defaultValue={data?.slides[index]?.description}
                          // error={slideErrors && slideErrors['description']?.message}
                          {...register(`slides[${index}].description`)}
                        />
                      </FormElement>
                      <FormElement>
                        <input
                          type='text'
                          placeholder='Artist Name'
                          defaultValue={data.slides[index].artistName}
                          // error={slideErrors && slideErrors['artistName']?.message}
                          {...register(`slides[${index}].artistName`)}
                        />
                      </FormElement>
                      <FormElement>
                        <input
                          type='text'
                          placeholder='Link to artist page'
                          defaultValue={data.slides[index].linkToPage}
                          // error={slideErrors && slideErrors['linkToPage']?.message}
                          {...register(`slides[${index}].linkToPage`)}
                        />
                      </FormElement>
                      <FormElement>
                        <input
                          type='file'
                          placeholder='Load image'
                          // error={slideErrors && slideErrors['image']?.message}
                          {...register(`slides[${index}].image`)}
                        />
                        {data?.slides[index] && <Image src={data.slides[index].image} />}
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

export default StickerBookForm;

const Image = styled.img`
  width: 200px;
  height: auto;
`;
