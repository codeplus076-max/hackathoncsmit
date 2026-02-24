import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css"; // Ensure standard globals are imported

export const metadata = {
    title: "AI Rural Health Triage",
    description: "Accessible Health Assistant for Rural Communities"
};

export default async function LocaleLayout({
    children,
    params: { locale }
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className="bg-gray-50 min-h-screen font-sans text-gray-900">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
