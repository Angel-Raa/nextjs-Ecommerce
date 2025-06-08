"use client"

import type React from "react"
import { PrimaryButton } from "../shared/PrimaryButton"
import { SecondaryButton } from "../shared/SecondaryButton"

interface EmptyStateIllustratedProps {
  type?: "search" | "cart" | "collection" | "favorites" | "notifications" | "custom"
  title?: string
  description?: string
  illustration?: React.ReactNode
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

export const EmptyStateIllustrated = ({
  type = "custom",
  title,
  description,
  illustration,
  primaryAction,
  secondaryAction,
  className = "",
}: EmptyStateIllustratedProps) => {
  // Default content based on type
  let defaultIllustration
  let defaultTitle
  let defaultDescription
  let defaultPrimaryAction

  switch (type) {
    case "search":
      defaultIllustration = <SearchIllustration />
      defaultTitle = "No results found"
      defaultDescription = "We couldn't find what you're looking for. Try different keywords or filters."
      defaultPrimaryAction = { label: "Clear search", href: "#" }
      break
    case "cart":
      defaultIllustration = <CartIllustration />
      defaultTitle = "Your cart is empty"
      defaultDescription = "Looks like you haven't added any items to your cart yet."
      defaultPrimaryAction = { label: "Browse products", href: "/products" }
      break
    case "collection":
      defaultIllustration = <CollectionIllustration />
      defaultTitle = "No items yet"
      defaultDescription = "This collection is empty. Add items to get started."
      defaultPrimaryAction = { label: "Add item", href: "#" }
      break
    case "favorites":
      defaultIllustration = <FavoritesIllustration />
      defaultTitle = "No favorites yet"
      defaultDescription = "Items you favorite will appear here for easy access."
      defaultPrimaryAction = { label: "Browse products", href: "/products" }
      break
    case "notifications":
      defaultIllustration = <NotificationsIllustration />
      defaultTitle = "No notifications"
      defaultDescription = "You're all caught up! Check back later for updates."
      defaultPrimaryAction = { label: "Refresh", href: "#" }
      break
    default:
      defaultIllustration = <DefaultIllustration />
      defaultTitle = "Nothing to display"
      defaultDescription = "There's nothing here yet."
      defaultPrimaryAction = { label: "Get started", href: "#" }
  }

  const displayIllustration = illustration || defaultIllustration
  const displayTitle = title || defaultTitle
  const displayDescription = description || defaultDescription
  const displayPrimaryAction = primaryAction || defaultPrimaryAction

  return (
    <div className={`flex flex-col items-center justify-center text-center px-4 py-12 ${className}`}>
      {/* Illustration */}
      <div className="mb-8 w-full max-w-xs">{displayIllustration}</div>

      {/* Content */}
      <h3 className="text-xl lg:text-2xl font-light text-gray-900 tracking-tight mb-3">{displayTitle}</h3>
      <p className="text-base text-gray-600 font-light max-w-md mb-8">{displayDescription}</p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {displayPrimaryAction && (
          <PrimaryButton
            label={displayPrimaryAction.label}
            href={displayPrimaryAction.href}
            onClick={displayPrimaryAction.onClick}
          />
        )}
        {secondaryAction && (
          <SecondaryButton
            label={secondaryAction.label}
            href={secondaryAction.href}
            onClick={secondaryAction.onClick}
          />
        )}
      </div>
    </div>
  )
}

// Primary Button Component

// Secondary Button Component


// Minimalist SVG Illustrations
const SearchIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="200" height="160" fill="white" />
    <circle cx="100" cy="80" r="50" fill="#F5F5F5" />
    <circle cx="100" cy="80" r="30" stroke="#D1D5DB" strokeWidth="2" />
    <path d="M123 103L130 110" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" />
    <path d="M100 70V90" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 80H110" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CartIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="200" height="160" fill="white" />
    <rect x="50" y="60" width="100" height="70" rx="8" fill="#F5F5F5" />
    <path
      d="M70 50C70 39 80 30 100 30C120 30 130 39 130 50V60H70V50Z"
      fill="#F5F5F5"
      stroke="#D1D5DB"
      strokeWidth="2"
    />
    <rect x="70" y="60" width="60" height="2" fill="#D1D5DB" />
    <path d="M85 80L115 80" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M85 100L115 100" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M85 90L105 90" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CollectionIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="200" height="160" fill="white" />
    <rect x="40" y="40" width="50" height="50" rx="4" fill="#F5F5F5" stroke="#D1D5DB" strokeWidth="2" />
    <rect x="110" y="40" width="50" height="50" rx="4" fill="#F5F5F5" stroke="#D1D5DB" strokeWidth="2" />
    <rect x="40" y="110" width="50" height="50" rx="4" fill="#F5F5F5" stroke="#D1D5DB" strokeWidth="2" />
    <rect x="110" y="110" width="50" height="50" rx="4" fill="#F5F5F5" stroke="#D1D5DB" strokeWidth="2" />
    <path d="M55 65L75 65" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M125 65L145 65" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M55 135L75 135" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M125 135L145 135" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const FavoritesIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="200" height="160" fill="white" />
    <circle cx="100" cy="80" r="50" fill="#F5F5F5" />
    <path
      d="M100 100C100 100 120 85 120 70C120 63.3726 114.627 58 108 58C104.029 58 100.568 60.0999 98.5 63.3662C96.4321 60.0999 92.9706 58 89 58C82.3726 58 77 63.3726 77 70C77 85 100 100 100 100Z"
      stroke="#D1D5DB"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const NotificationsIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="200" height="160" fill="white" />
    <circle cx="100" cy="80" r="50" fill="#F5F5F5" />
    <path
      d="M120 90H80V75C80 64.5066 88.5066 56 99 56V56C109.493 56 118 64.5066 118 75V90H120Z"
      stroke="#D1D5DB"
      strokeWidth="2"
    />
    <path
      d="M90 90V95C90 100.523 94.4772 105 100 105V105C105.523 105 110 100.523 110 95V90"
      stroke="#D1D5DB"
      strokeWidth="2"
    />
    <path d="M80 90H120" stroke="#D1D5DB" strokeWidth="2" />
  </svg>
)

const DefaultIllustration = () => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="200" height="160" fill="white" />
    <circle cx="100" cy="80" r="50" fill="#F5F5F5" />
    <path d="M75 80H125" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    <path d="M100 55V105" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
