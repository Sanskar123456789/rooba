import { NextPage } from "next";

interface Props {
  btnLabel: string;
  onSubmitFn: any;
}

const Button: NextPage<Props> = ({ onSubmitFn, btnLabel }) => {
  return (
    <button
      type="button"
      className=" bg-[var(--primary-color)] m-2 h-14 rounded text-white text-center w-11/12 font-light"
      onClick={onSubmitFn}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
