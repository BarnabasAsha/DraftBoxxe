import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    handleChange: (e: any) => void;
}

const FormInput = (props: InputProps) => {
    const { label, name, handleChange, ...otherProps } = props
    return (
        <div className="flex flex-col my-5">
            <label className="text-sm font-semibold mb-2">{label}</label>
            <input className="bg-transparent border outline-none py-3 px-4 w-full max-w-xs rounded-lg border-grey-400" name="name" onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default FormInput