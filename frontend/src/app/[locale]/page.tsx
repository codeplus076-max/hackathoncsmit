"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Chatbot from '@/components/Chatbot';
import ResultsDashboard from '@/components/ResultsDashboard';

export default function Home() {
    const tHome = useTranslations('HomePage');
    const tDisclaimer = useTranslations('Disclaimer');
    const [results, setResults] = useState<any>(null);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
                            {tHome('title')}
                        </h1>
                        <p className="text-lg text-gray-600 mt-2">
                            {tHome('subtitle')}
                        </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <LanguageSwitcher />
                    </div>
                </header>

                {/* Medical Disclaimer */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg shadow-sm">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-bold text-yellow-800">
                                {tDisclaimer('title')}
                            </h3>
                            <div className="mt-1 text-sm text-yellow-700">
                                <p>{tDisclaimer('text')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="transition-all duration-500 ease-in-out">
                    {!results ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <Chatbot onComplete={setResults} />
                        </div>
                    ) : (
                        <div className="animate-in zoom-in-95 duration-500">
                            <ResultsDashboard data={results} onReset={() => setResults(null)} />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="mt-16 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} AI Rural Health Triage Assistant | Open Source Prototype</p>
                </footer>

            </div>
        </main>
    );
}
