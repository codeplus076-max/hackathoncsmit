'use client'

import * as React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { WelcomeScreen } from '@/components/screens/welcome-screen'
import { ChatbotScreen } from '@/components/screens/chatbot-screen'
import { DoctorHelpScreen } from '@/components/screens/doctor-help-screen'

type Language = 'english' | 'hindi' | 'marathi'
type Screen = 'welcome' | 'chatbot' | 'doctor-help'

export default function Home() {
  const [currentScreen, setCurrentScreen] = React.useState<Screen>('welcome')
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>('english')

  const handleStartConsultation = (language: Language) => {
    setSelectedLanguage(language)
    setCurrentScreen('chatbot')
  }

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome')
  }

  const handleConsultDoctor = () => {
    setCurrentScreen('doctor-help')
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Screen Container with Transitions */}
      <div className="relative">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStartConsultation={handleStartConsultation} />
        )}
        
        {currentScreen === 'chatbot' && (
          <ChatbotScreen
            language={selectedLanguage}
            onBack={handleBackToWelcome}
            onConsultDoctor={handleConsultDoctor}
          />
        )}
        
        {currentScreen === 'doctor-help' && (
          <DoctorHelpScreen onBackToAssistant={handleBackToWelcome} />
        )}
      </div>
    </div>
  )
}
