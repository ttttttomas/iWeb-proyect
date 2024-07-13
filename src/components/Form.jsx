import { useForm } from "react-hook-form";

export default function Contacto(){

    const { register, handleSubmit } = useForm();

    const enviar = (e,data) => {
        e.preventDefault()
        console.log(data);
    }

  return (
        <form className="flex flex-col gap-y-10 justify-center items-center" onSubmit={handleSubmit(enviar)}>

            <input required className=" text-black rounded-lg px-2 py-2 w-[50%]" type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input required className=" text-black rounded-lg px-2 py-2 w-[50%]" type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input required className="text-black rounded-lg px-2 py-2 w-[50%]" type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <textarea required className=" text-black rounded-lg px-2 w-[50%]" placeholder="Contanos sobre tu idea..." {...register("textarea")} ></textarea>

            <button className="bg-white rounded-xl text-black font-bold p-2" type="submit">Enviar</button>

        </form>
  )
}
