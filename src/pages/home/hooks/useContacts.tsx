import { useState } from 'react';

interface FormValues {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const useContact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.fullName || !formValues.email || !formValues.message) {
      setFormStatus('Please fill out all required fields.');
      return;
    }
    setIsLoading(true); 

    try {
      setTimeout(() => {
        setFormStatus('Your message has been sent successfully.');
        setIsLoading((prev)=> !prev); 
        // Reset form
        setFormValues({
          fullName: '',
          email: '',
          company: '',
          message: '',
        });
      }, 1000);
    } catch (error) {
      setIsLoading(false); // Stop loading on error
      setFormStatus('Something went wrong, please try again.');
    }
  };

  return {
    formValues,
    formStatus,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useContact;
