import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({ ...rest }: InputProps) {

  return (
    <input
      className='bg-zinc-900 py-3 px-4 text-sm font-normal placeholder:text-zinc-500 rounded'
      {...rest}
    />
  )
}