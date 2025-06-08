import Link from "next/link"

export const SecondaryButton = ({
  label,
  href,
  onClick,
}: {
  label: string
  href?: string
  onClick?: () => void
}) => {
  const buttonContent = (
    <div className="group flex items-center space-x-2">
      <span>{label}</span>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium min-w-[160px]"
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium min-w-[160px]"
    >
      {buttonContent}
    </button>
  )
}