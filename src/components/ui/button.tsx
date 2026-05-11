import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariantType = 'ghost' | 'default' | 'link'

interface ButtonI extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariantType;
    children: ReactNode;
}

const variantStyle = {
    default: 'bg-accent text-white hover:brightness-120 hover:shadow-2xl shadow-accent',
    ghost: 'border-1 border-accent text-accent hover:bg-accent hover:text-white',
    link: 'text-accent dark:hover:text-white'
}

export default function Button ({ variant='default', children, ...props}: ButtonI) {
    const classes = 'px-5 py-1.5 text-md font-normal rounded-lg hover:cursor-pointer duration-100';

    //@ts-ignore
    return <button className={twMerge(classes, variantStyle[variant])}  {...props}>
        {children}
    </button>
}