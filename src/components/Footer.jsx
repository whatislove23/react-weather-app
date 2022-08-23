import { SiReact, SiTailwindcss } from "react-icons/si";
import { WiCloud } from "react-icons/wi";
export default () => (
  <div className="flex gap-5 text-3xl my-5 mt-6 text-blue-400 items-center justify-center">
    <a href="https://reactjs.org" target="_blank">
      <SiReact />
    </a>
    <a href="https://tailwindcss.com" target="_blank">
      <SiTailwindcss />
    </a>
    <a href="https://www.weatherbit.io" target="_blank" className="text-4xl">
      <WiCloud className="text-4xl" />
    </a>
  </div>
);
