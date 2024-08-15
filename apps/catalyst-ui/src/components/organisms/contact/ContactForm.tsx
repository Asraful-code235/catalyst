import { LabeledInput } from '@/components/molecules/input/LabeledInput';
import { Button } from '@repo/ui/components/atoms/button';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    'idle' | 'uploading' | 'success' | 'error'
  >('idle');

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0] || null);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.pdf', '.docx', '.jpg', '.jpeg'] as any,
    onDrop,
  });

  const onSubmit = async (data: any) => {
    try {
      setUploadStatus('uploading');
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      if (file) {
        formData.append('file', file);
      }
      console.log('formData', formData);
      setUploadStatus('success');
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-x-6 lg:gap-y-[42px]'
    >
      <LabeledInput label='Name' id='name' required register={register} />
      <LabeledInput
        label='Email'
        id='email'
        type='email'
        required
        register={register}
      />
      <LabeledInput label='Phone' id='phone' required register={register} />
      <LabeledInput label='Topic' id='topic' required register={register} />
      <LabeledInput
        label='Company Name'
        id='company'
        required
        register={register}
      />
      <LabeledInput
        label='Company Website'
        id='companyWebsite'
        required
        register={register}
      />

      {/* File Upload */}
      <div className='description col-span-2 flex flex-col gap-4'>
        <label htmlFor='file'>Upload PDF</label>
        <div {...getRootProps()} className='border border-[#1A1A1A66]'>
          <input {...getInputProps()} />
          {file ? (
            <p className='text-green-500 description p-8 lg:p-14 flex items-center justify-center flex-col gap-3'>
              File selected: {file.name}
            </p>
          ) : (
            <div className='description p-8 lg:p-14 flex items-center justify-center flex-col gap-4 lg:gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                className='max-lg:w-[21.333px] max-lg:h-[21.333px]'
              >
                <path
                  d='M12.25 21V6.7375L7.7 11.2875L5.25 8.75L14 0L22.75 8.75L20.3 11.2875L15.75 6.7375V21H12.25ZM3.5 28C2.5375 28 1.71383 27.6576 1.029 26.9727C0.344166 26.2879 0.00116667 25.4637 0 24.5V19.25H3.5V24.5H24.5V19.25H28V24.5C28 25.4625 27.6576 26.2868 26.9727 26.9727C26.2879 27.6588 25.4637 28.0012 24.5 28H3.5Z'
                  fill='#1A1A1A'
                />
              </svg>
              <p className='description'>
                <span className='font-medium '>Choose a file</span> or drag it
                here.
              </p>
            </div>
          )}
        </div>
        {errors.file && (
          <span className='description p-14 flex items-center justify-center flex-col gap-3'>
            {'Error Uploading File'}
          </span>
        )}
      </div>

      {/* Message */}
      <div className='description col-span-2'>
        <label htmlFor='message'>Your message *</label>
        <textarea
          rows={4}
          id='message'
          {...register('message', { required: 'Message is required' })}
          required
          className='outline-none border-b border-[#1A1A1A] w-full'
        />
      </div>

      {/* Submit Button */}
      <div className='flex flex-col items-center justify-between gap-4 w-full col-span-2'>
        <Button className='w-full col-span-2 mt-8' type='submit'>
          {uploadStatus === 'uploading' ? 'Uploading...' : 'Submit'}
        </Button>
        {uploadStatus === 'success' && (
          <p className='success-message'>
            Your message was submitted successfully!
          </p>
        )}
        {uploadStatus === 'error' && (
          <p className='error-message'>
            An error occurred during upload. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};
