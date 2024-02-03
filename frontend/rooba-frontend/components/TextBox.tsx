import { NextPage } from "next";

interface Props {
  inputValue: string | number;
  inputType: string;
  inputKey: string;
  inputPlaceholder: string;
  onChangeFn: any;
}

const TextBox: NextPage<Props> = ({
  inputValue,
  inputType,
  onChangeFn,
  inputKey,
  inputPlaceholder,
}) => {
  return (
    <div className="block">
      <input
        type={inputType}
        className="px-[17px] m-2 py-[31px] h-14 border w-11/12 focus:border-[var(--primary-color)]"
        value={inputValue}
        onChange={(event) => onChangeFn(inputKey, event.target.value)}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

export default TextBox;
