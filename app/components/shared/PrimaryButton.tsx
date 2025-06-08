import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const PrimaryButton = ({
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
      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors duration-200 font-medium min-w-[160px]"
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors duration-200 font-medium min-w-[160px]"
    >
      {buttonContent}
    </button>
  )
}
