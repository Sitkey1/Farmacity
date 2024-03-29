import { useForm } from "react-hook-form";
import "./style.scss";
import { BasketStore } from "../../../../Store/BasketStore";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../../../navigation/routeNames";

export const Form = ({ basket }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // получили корзину
    const basket = BasketStore.getAll();
    let groupByChannel = {};
    // группиируем в объект по channel key
    basket.forEach((element) => {
      groupByChannel[element.channel] = groupByChannel[element.channel] || [];
      groupByChannel[element.channel].push(element);
    });
    // получаем ключи из группы каналов (channel)
    const objectKeys = Object.keys(groupByChannel);
    // формируем поле cart
    const cartData = [];
    objectKeys.forEach((element) => {
      cartData.push({
        s: groupByChannel[element][0].partner,
        c: groupByChannel[element].length,
        z: { referer: "https://facebook.com/", channel: element },
      });
    });

    await fetch(
      "https://hard-good.cfd/api/5KZDLo9tKfuidqeY-TBkkNDdySYB/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.telephone,
          email: data.email,
          cart: cartData,
        }),
      }
    )
      .then((r) => {
        r.json();
        BasketStore.deleteAll();
        reset();
        navigate(routeNames.thanks, { replace: true });
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        {...register("name", {
          required: true,
          maxLength: 20,
        })}
        placeholder="Nombre"
        className={errors.name ? "input-error" : ""}
      />
      <label>
        <span className="mask">EJEMPLO: +54 1160918920</span>
        <input
          type="number"
          {...register("telephone", {
            required: true,
            maxLength: 11,
          })}
          placeholder="Número de teléfono"
          className={errors.telephone ? "input-error" : ""}
        />
      </label>
      <input
        {...register("email", {
          required: true,
          maxLength: 20,
        })}
        placeholder="Сorreo electrónico"
        className={errors.email ? "input-error" : ""}
      />
      <button type="submit" className="btn-reset">
        comprar
      </button>
    </form>
  );
};
