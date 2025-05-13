'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import BorderReveal from '../BorderReveal';
import { motion, useInView } from 'framer-motion';

interface FormData {
  yourname: string;
  youremail: string;
  yourmessage: string;
}

const Form = ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('yourname', data.yourname);
    formData.append('youremail', data.youremail);
    formData.append('yourmessage', data.yourmessage);

    try {
      await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          Object.fromEntries(formData.entries()) as Record<string, string>
        ).toString()
      });

      onSubmitSuccess();
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <input
          type="text"
          {...register('yourname', { required: 'Name is required' })}
          id="yourname"
          placeholder="Name"
          className="p-2 border-b font-semibold dark:text-neutral-lightBeige text-navy-dark font-aze dark:border-neutral-lightBeige border-navy-dark bg-transparent placeholder:dark:text-neutral-lightBeige placeholder:text-navy-dark w-full"
        />
        {errors.yourname && (
          <p className="text-red-500 text-sm mt-1">{errors.yourname.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          {...register('youremail', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address'
            }
          })}
          id="youremail"
          placeholder="Email"
          className="p-2 border-b font-semibold dark:text-neutral-lightBeige text-navy-dark font-aze dark:border-neutral-lightBeige border-navy-dark bg-transparent placeholder:dark:text-neutral-lightBeige placeholder:text-navy-dark w-full"
        />
        {errors.youremail && (
          <p className="text-red-500 text-sm mt-1">
            {errors.youremail.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register('yourmessage', { required: 'Message is required' })}
          id="yourmessage"
          placeholder="Message"
          rows={5}
          className="p-2 border dark:text-neutral-lightBeige text-navy-dark font-semibold font-aze mt-2 dark:border-neutral-lightBeige border-navy-dark bg-transparent placeholder:dark:text-neutral-lightBeige placeholder:text-navy-dark w-full"
        ></textarea>
        {errors.yourmessage && (
          <p className="text-red-500 text-sm mt-1">
            {errors.yourmessage.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-navy-dark dark:text-navy-dark dark:bg-accent-blue text-neutral-lightBeige font-bold font-inter p-2  transition duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

/*
contact section
*/
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="bg-primary relative z-10 pb-20" id="contact">
      <div className="container-content">
        <BorderReveal />
        <div className="flex flex-col pt-3">
          <div ref={ref}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              className="heading-2 mb-16"
            >
              Contact
            </motion.h2>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-inter font-bold text-center text-navy-dark dark:text-neutral-lightBeige"
            >
              Thanks! Your message has been sent and I will get back to you
              soon!
            </motion.div>
          ) : (
            <Form onSubmitSuccess={() => setIsSubmitted(true)} />
          )}
        </div>
      </div>
    </section>
  );
}
