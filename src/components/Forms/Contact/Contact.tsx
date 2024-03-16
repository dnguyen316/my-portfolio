import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import UserServices from "../../../services/userServices";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactFormSchema = z.object({
  name: z.string() || "",
  email: z.string().email(),
  message: z.string().min(3),
});

type ContactSchemaType = z.infer<typeof ContactFormSchema>;

const ERROR_INPUT_CLASSNAME =
  "!border-red-500 !border-t-red-500 focus:!border-t-red-500";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({ resolver: zodResolver(ContactFormSchema) });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ContactSchemaType> = async (data) => {
    console.log(errors);
    const userId = crypto.randomUUID();
    try {
      setIsLoading(true);
      const response = await UserServices.submitMessage({
        userId,
        ...data,
      });

      if (typeof response === "object" && response.status) {
        navigate("/contact");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder="contact-card"
      className="flex"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-2 mb-2 max-w-screen-lg md:mx-auto md:min-w-[500px] md:pr-5"
      >
        <div className="mb-1 flex flex-col gap-6 ">
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-sm dark:text-white"
            placeholder="name"
          >
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            className=" dark:text-white !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-white"
            crossOrigin="anonymous"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("name")}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-sm dark:text-white after:content-['*'] after:pl-1 after:text-red-500"
            placeholder="email"
            aria-required
          >
            Email
          </Typography>
          <Input
            size="lg"
            type="email"
            placeholder="name@mail.com"
            className={` dark:text-white ${
              errors?.email
                ? ERROR_INPUT_CLASSNAME
                : "!border-t-blue-gray-200 focus:!border-t-gray-900"
            }  dark:focus:!border-white`}
            crossOrigin="anonymous"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email")}
          />
        </div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-sm mt-8 mb-7 after:content-['*'] after:pl-1 after:text-red-500 dark:text-white"
          placeholder="message"
        >
          Message
        </Typography>
        <Textarea
          resize={true}
          className={` dark:text-white ${
            errors?.email
              ? ERROR_INPUT_CLASSNAME
              : "!border-t-blue-gray-200 focus:!border-t-gray-900"
          }  dark:focus:!border-white`}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          {...register("message")}
        />
        <Button
          className="mt-6 capitalize text-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:bg-blue-gray-100 dark:text-blue-gray-900 dark:hover:bg-gray-900"
          fullWidth
          placeholder="submit"
          type="submit"
          loading={isLoading}
        >
          submit
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
