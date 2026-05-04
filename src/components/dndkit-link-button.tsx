type DndKitLinkButtonProps = {
  href: string;
};

export function DndKitLinkButton({ href }: DndKitLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
    >
      Ver dnd-kit no Vercel
    </a>
  );
}