import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);


  const submit = async (url, data) => {
    const random = Math.random();
    setIsLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
}


export default useSubmit;
