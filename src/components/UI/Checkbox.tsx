type HTMLCheckboxElement = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {}

interface CheckboxProps extends HTMLCheckboxElement {}

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return (
    <input
      type="checkbox"
      className="appearance-none h-4 w-4 border-[0.5px] border-[#EBD3FF] duration-500 rounded-sm bg-white checked:bg-main checked:border-main bg-center bg-no-repeat checked:bg-[url('/icons/checkIcon.svg')]"
      {...props}
    />
  )
}

export default Checkbox
