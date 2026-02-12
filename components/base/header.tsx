"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Header(){
    const [query, setQuery] = useState("");
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (mobileSearchOpen) inputRef.current?.focus();
    }, [mobileSearchOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileSearchOpen(false);
        };
        if (mobileSearchOpen) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [mobileSearchOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Pesquisar:", query);
        location.href = "/pesquisa/" + query
    };

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between gap-3 h-14 px-3 bg-white border-b border-gray-200" role="banner">
            <div className="flex items-center">
                <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    aria-label="Home"
                    onClick={() => (location.href = "/")}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center">
                {/* Inline search for >= sm */}
                <form className="hidden sm:block w-full max-w-3xl" onSubmit={handleSubmit} role="search" aria-label="Pesquisar no site">
                    <label className="sr-only" htmlFor="search-desktop">Pesquisar</label>
                    <input
                        id="search-desktop"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquisar..."
                        aria-label="Pesquisar"
                    />
                </form>

                {/* Mobile search icon */}
                <button
                    className="inline-flex sm:hidden items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    aria-label="Abrir pesquisa"
                    onClick={() => setMobileSearchOpen(true)}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center">
                <button
                    className="inline-flex items-center justify-center bg-blue-600 p-1.5 rounded-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    aria-label="Perfil"
                    onClick={() => (location.href = "/perfil")}
                    title="Perfil"
                >
                    <span className="inline-block" aria-hidden>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1" />
                            <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </span>
                </button>
            </div>

            {/* Mobile search overlay */}
            {mobileSearchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-25 flex items-start justify-center p-3 z-60" role="dialog" aria-modal="true" aria-label="Pesquisar">
                    <form onSubmit={handleSubmit} className="w-full max-w-3xl mt-3 flex gap-2">
                        <label className="sr-only" htmlFor="search-mobile">Pesquisar</label>
                        <input
                            id="search-mobile"
                            ref={inputRef}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Pesquisar..."
                            aria-label="Pesquisar"
                        />
                        <button type="button" className="text-xl p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none" aria-label="Fechar pesquisa" onClick={() => setMobileSearchOpen(false)}>
                            ✕
                        </button>
                    </form>
                </div>
            )}
        </header>
    );
}
