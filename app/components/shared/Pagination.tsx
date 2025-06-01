"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CompactPaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  className = "",
}: CompactPaginationProps) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {currentPage > 1 && (
        <Link href={`?page=${prevPage}`} className="flex items-center gap-2">
          <ChevronLeft />
          Anterior
        </Link>
      )}

      <span className="text-sm">
        Página {currentPage} de {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link href={`?page=${nextPage}`} className="flex items-center gap-2">
          Siguiente
          <ChevronRight />
        </Link>
      )}
    </div>
  );
};
