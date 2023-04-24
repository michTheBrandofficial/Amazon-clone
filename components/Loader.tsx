import { callSignal } from "nixix";
import './Loader.css';

export default function Loader() {
  const [loading] = callSignal(4);
  return (
    <section className="w-full px-3 flex flex-wrap justify-around mb-10">
      {Array(loading.value).fill('').map((_) => {
        return (
          <div className="relative flex flex-col m-5 bg-white p-10">
            <p className="absolute top-2 right-2 load rounded-md py-2 w-12" ></p>
            {/* img */}
            <div style={{ height: '200px', width: '200px', }} className="load rounded-md" ></div>
            <h4 className="load rounded-md py-2 my-3 w-36"></h4>
            <div className="load rounded-md py-2 mb-3 w-32" ></div>
            <div className="load rounded-md py-6 mb-3" ></div>
            <div className="load py-3 rounded-md mb-3 w-12" ></div>
            <div className="load py-2 rounded-md mb-3 w-40" ></div>
            <button className="load py-4 rounded-md" ></button>
          </div>
        );
      })}
    </section>
  );
}
