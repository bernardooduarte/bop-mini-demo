import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  error?: string;
  disabled?: boolean;
};

export function InputField({
  label,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  ...rest
}: InputFieldProps) {
  const inputId = useId();
  const errorId = `${inputId}-error`;

  return (
    <div className="w-full space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
        {...rest}
      />
      {error ? (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}