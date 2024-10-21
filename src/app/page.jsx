import Comprador from "../../components/Comprador";
import Cliente from "../../components/Cliente";
import { usePedidos } from "@/context/ComidaContext";
import Fichas from "../../components/Fichas";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data: productos } = await supabase.from("productos").select();

  const comida = productos.filter((producto) => {
    if (producto.tipo === "comida") {
      return producto;
    }
  });
  const bebida = productos.filter((producto) => {
    if (producto.tipo === "bebida") return producto;
  });
  const chucheria = productos.filter((producto) => {
    if (producto.tipo === "chucheria") return producto;
  });

  return (
    <div className="mx-4 mt-4">
      <h1 className="flex w-full-screen justify-center mb-4">
        Mordisco y Sabor
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {comida.map((producto) => (
          <Fichas
            key={producto.id}
            id={producto.nombre}
            precio={producto.precio}
            img={`/${producto.nombre.replaceAll(" ", "")}.jpg`}
          />
        ))}
        {chucheria.map((producto) => (
          <Fichas
            key={producto.id}
            id={producto.nombre}
            precio={producto.precio}
            img={`/${producto.nombre.replaceAll(" ", "")}.jpg`}
          />
        ))}
        {bebida.map((producto) => (
          <Fichas
            key={producto.id}
            id={producto.nombre}
            precio={producto.precio}
            img={`/${producto.nombre.replaceAll(" ", "")}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
export async function get() {
  return productos;
}
