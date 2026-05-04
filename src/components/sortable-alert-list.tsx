type SortableAlertListVariant = 'alta-temperatura' | 'falha-do-sensor' | 'pressao-critica' | 'baixa-pressao';

type SortableAlertListProps = {
  label: string;
  variant?: SortableAlertListVariant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const variantClasses: Record<SortableAlertListVariant, string> = {
  'alta-temperatura': 'border-l-red-500 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100',
  'falha-do-sensor': 'border-l-yellow-500 bg-yellow-50 text-yellow-800 hover:border-yellow-300 hover:bg-yellow-100',
  'pressao-critica': 'border-l-orange-500 bg-orange-50 text-orange-700 hover:border-orange-300 hover:bg-orange-100',
  'baixa-pressao': 'border-l-blue-500 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-100',
};

export function SortableAlertList({
  label,
  variant = 'alta-temperatura',
  disabled = false,
  loading = false,
  onClick,
  className = '',
}: SortableAlertListProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        group flex w-full items-center gap-3 rounded-lg border border-slate-200 border-l-4 px-4 py-3 text-left
        font-medium shadow-sm transition duration-200
        focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm ring-1 ring-inset ring-slate-200 transition group-hover:bg-white"
      >
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
      </span>

      <span className="flex min-w-0 flex-1 flex-col items-start">
        <span className="truncate text-sm font-semibold text-slate-900">{label}</span>
        <span className="mt-0.5 text-xs text-slate-500">Arraste para reorganizar os alertas</span>
      </span>

      {loading && (
        <svg className="h-4 w-4 animate-spin text-slate-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      )}
    </button>
  );
}