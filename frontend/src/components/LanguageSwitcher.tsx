"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    }

    return (
        <label className="flex items-center gap-2">
            <p className="sr-only">Change language</p>
            <select
                defaultValue={locale}
                onChange={onSelectChange}
                disabled={isPending}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm"
            >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="es">Español (Spanish)</option>
            </select>
        </label>
    );
}
