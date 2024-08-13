import formValidation from "@/utils/formValidation";
import { useState } from "react";
import { ZodError } from "zod";

type ErrorItem = {
  code: string;
  message: string;
  path: string[];
};

const useForm = (ruLang: boolean, csrfToken: string) => {
  const formInitState = {
    name: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(formInitState);
  const [errors, setErrors] = useState(formInitState);
  const [loader, setLoader] = useState(false);
  const [isSent, setIsSent] = useState<string | boolean>(false);

  const formTexts = {
    name: {
      label: ruLang ? "Ваше имя:" : "Your name:",
      placeholder: ruLang ? "Иван Иванов" : "John Doe",
    },
    email: {
      label: "Email:",
      placeholder: ruLang ? "Ivan.Ivanov@mail.ru" : "John.Doe@example.com",
    },
    message: {
      label: ruLang ? "Сообщение:" : "Message:",
      placeholder: ruLang
        ? "Расскажите чем я могу быть Вам полезен"
        : "Tell me how I can be useful to you",
    },
    btn: ruLang ? "Отправить" : "Submit",
    answerTitle:
      isSent === "send success"
        ? ruLang
          ? "Ваше сообщение отправлено!"
          : "Your message has been sent!"
        : ruLang
        ? "Произошла ошибка при  отправле сообщения!"
        : "There was an error sending the message!",
    answerText:
      isSent === "send success"
        ? ruLang
          ? "Cпасибо за проявленный интерес. Я отвечу Вам в ближайшее время."
          : "Thank you for your interest. I will answer you shortly."
        : ruLang
        ? "Во время отправки формы произошла непредвиденная ошибка, попробуйте еще раз или свяжитесь со мной другим способом"
        : "An unexpected error occurred while submitting the form, please try again or contact me in another way",
    answerBtn: ruLang ? "Отправить снова" : "Send again",
  };

  const cleanErrors = () => {
    setErrors(formInitState);
  };

  const changeHandler = (field: Record<string, string>) => {
    cleanErrors();
    setForm((prev) => ({ ...prev, ...field }));
  };

  const errorHandler = (errors: ErrorItem[]) => {
    console.log(errors);
    const errorObject: Record<string, string> = {};

    for (const err of errors) {
      const key = err.path[0] as string;
      const message = err.message;
      errorObject[key] = message;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errorObject,
    }));
  };

  const formSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    try {
      const resultFormValidation = formValidation(ruLang);

      resultFormValidation.parse(form);

      const response = await fetch("/api/messageSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, csrfToken }),
      });

      if (response.ok) {
        const responceData = await response.json();

        if (
          responceData.name &&
          responceData.name === "ZodError" &&
          responceData.issues &&
          responceData.issues.length > 0
        ) {
          errorHandler(responceData.issues);
        } else {
          setIsSent(responceData?.name ? responceData.name : "not success");
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        errorHandler(error.errors as ErrorItem[]);
      }
    } finally {
      setLoader(false);
    }
  };

  const reSubmit = () => {
    setForm(formInitState);
    setIsSent(false);
  };

  return {
    loader,
    formTexts,
    form,
    formSubmit,
    errors,
    changeHandler,
    isSent,
    reSubmit,
  };
};

export default useForm;
