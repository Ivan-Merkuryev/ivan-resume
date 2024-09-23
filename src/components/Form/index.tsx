import { IForm } from "../../types/IForm";
import { Field } from "../Field";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.sass";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className="flex flex-col max-w-[550px] mx-auto gap-8">
        <div className={styles.fields}>
          <Field
            id="name"
            label="Name:"
            placeholder="Имя"
            type="text"
            // extra="mb-4 mx-4"
            err={errors.name?.message}
            {...register("name", {
              required: "Name is required!",
            })}
          />
          <Field
            id="email or telegram"
            label="email or telegram"
            placeholder="Почта или телеграм"
            type="text"
            // extra="mb-4 mx-4"
            err={errors.email?.message}
            {...register("email", {
              required: "Email is required!",
            })}
          />
        </div>
        <textarea
          className={`${styles.textarea} ${
            errors.comment?.message
              ? `${styles.textarea} ${styles.textareaErr}`
              : ""
          }`}
          // className={styles.textarea}
          id="comment"
          placeholder="Сообщение"
          {...register("comment", {
            required: "Comment is required!",
          })}
        ></textarea>
        <div className="flex justify-center">
          <button className={styles.button}>Отправить</button>
        </div>
      </div>
    </form>
  );
}
