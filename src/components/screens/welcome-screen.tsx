'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type Language = 'english' | 'hindi' | 'marathi'

interface WelcomeScreenProps {
  onStartConsultation: (language: Language) => void
}

const languages: { id: Language; label: string; nativeLabel: string }[] = [
  { id: 'english', label: 'English', nativeLabel: 'English' },
  { id: 'hindi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { id: 'marathi', label: 'Marathi', nativeLabel: 'मराठी' },
]

export function WelcomeScreen({ onStartConsultation }: WelcomeScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>('english')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 animate-fade-in">
      {/* Main Content Card */}
      <Card className="w-full max-w-md mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 px-6 sm:px-8">
          {/* Logo and Title */}
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            {/* Medical Icon */}
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.652.109a9.065 9.065 0 01-2.416.129M5 14.5l-1.402 1.402c-1.232 1.232-.65 3.318 1.067 3.611l.652.109a9.065 9.065 0 002.416.129M12 15v4.5"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                MedAI Assistant
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Your Multilingual Healthcare Support Companion
              </p>
            </div>
          </div>

          {/* Language Selection */}
          <div className="space-y-4 mb-8">
            <p className="text-sm font-medium text-center text-muted-foreground">
              Select your preferred language
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {languages.map((lang) => (
                <Button
                  key={lang.id}
                  variant={selectedLanguage === lang.id ? 'default' : 'outline'}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`h-16 sm:h-18 flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                    selectedLanguage === lang.id
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 text-white border-0 shadow-md'
                      : 'hover:border-teal-400 dark:hover:border-teal-500'
                  }`}
                >
                  <span className="text-xs opacity-80">{lang.label}</span>
                  <span className="text-sm sm:text-base font-semibold">{lang.nativeLabel}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <Button
            onClick={() => onStartConsultation(selectedLanguage)}
            className="w-full h-14 sm:h-16 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 hover:from-teal-600 hover:to-cyan-700 dark:hover:from-teal-500 dark:hover:to-cyan-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Start Consultation
          </Button>
        </CardContent>
      </Card>

      {/* Footer Note */}
      <p className="mt-6 text-xs text-muted-foreground text-center max-w-xs">
        Safe, private, and accessible healthcare guidance at your fingertips
      </p>
    </div>
  )
}
