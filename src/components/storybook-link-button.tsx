type StorybookLinkButtonProps = {
  href: string;
};

export function StorybookLinkButton({ href }: StorybookLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
    >
      Ver Storybook no Vercel
    </a>
  );
}
