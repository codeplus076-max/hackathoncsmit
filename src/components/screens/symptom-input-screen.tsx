'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

interface SymptomInputScreenProps {
  onBack: () => void
  onAnalyze: (symptoms: string) => void
  language: string
}

const quickSymptoms = [
  { id: 'fever', label: 'Fever', icon: '🌡️' },
  { id: 'headache', label: 'Headache', icon: '🤕' },
  { id: 'cough', label: 'Cough', icon: '😷' },
  { id: 'stomach-pain', label: 'Stomach Pain', icon: '🤢' },
  { id: 'body-aches', label: 'Body Aches', icon: '💪' },
  { id: 'cold', label: 'Cold', icon: '🤧' },
  { id: 'nausea', label: 'Nausea', icon: '🤮' },
  { id: 'fatigue', label: 'Fatigue', icon: '😴' },
]

export function SymptomInputScreen({ onBack, onAnalyze, language }: SymptomInputScreenProps) {
  const [symptoms, setSymptoms] = React.useState('')
  const [selectedChips, setSelectedChips] = React.useState<string[]>([])

  const handleChipToggle = (symptomId: string, symptomLabel: string) => {
    setSelectedChips((prev) => {
      const isSelected = prev.includes(symptomId)
      if (isSelected) {
        return prev.filter((id) => id !== symptomId)
      } else {
        return [...prev, symptomId]
      }
    })
  }

  const getCombinedSymptoms = () => {
    const chipLabels = selectedChips
      .map((id) => quickSymptoms.find((s) => s.id === id)?.label)
      .filter(Boolean)
    const allSymptoms = [...chipLabels]
    if (symptoms.trim()) {
      allSymptoms.push(symptoms.trim())
    }
    return allSymptoms.join(', ')
  }

  const handleAnalyze = () => {
    const combined = getCombinedSymptoms()
    if (combined.trim()) {
      onAnalyze(combined)
    }
  }

  return (
    <div className="min-h-screen flex flex-col px-4 py-6 sm:py-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="h-11 w-11 rounded-full hover:bg-accent/50"
          aria-label="Go back"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Describe Your Symptoms</h1>
          <p className="text-sm text-muted-foreground">Select or type your symptoms below</p>
        </div>
      </div>

      {/* Main Content */}
      <Card className="flex-1 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6 pb-6 px-5 sm:px-6 space-y-6">
          {/* Quick Symptom Chips */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Quick Select</p>
            <div className="flex flex-wrap gap-2">
              {quickSymptoms.map((symptom) => {
                const isSelected = selectedChips.includes(symptom.id)
                return (
                  <Badge
                    key={symptom.id}
                    variant={isSelected ? 'default' : 'outline'}
                    onClick={() => handleChipToggle(symptom.id, symptom.label)}
                    className={`cursor-pointer px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 text-white border-0 shadow-md'
                        : 'hover:border-teal-400 dark:hover:border-teal-500 hover:bg-accent/50'
                    }`}
                  >
                    <span className="mr-1.5">{symptom.icon}</span>
                    {symptom.label}
                  </Badge>
                )
              })}
            </div>
          </div>

          {/* Text Input */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Additional Details
            </p>
            <Textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Enter your symptoms or health question..."
              className="min-h-[160px] sm:min-h-[200px] text-base resize-none border-2 focus:border-teal-400 dark:focus:border-teal-500 rounded-xl transition-colors"
            />
          </div>

          {/* Selected Summary */}
          {(selectedChips.length > 0 || symptoms.trim()) && (
            <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400 mb-2">
                Selected Symptoms:
              </p>
              <p className="text-sm text-teal-600 dark:text-teal-300">{getCombinedSymptoms()}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <Button
          onClick={handleAnalyze}
          disabled={!getCombinedSymptoms().trim()}
          className="w-full h-14 sm:h-16 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 hover:from-teal-600 hover:to-cyan-700 dark:hover:from-teal-500 dark:hover:to-cyan-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          Analyze Symptoms
        </Button>
      </div>
    </div>
  )
}
