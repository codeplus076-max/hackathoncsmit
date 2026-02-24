'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

interface AIResponseScreenProps {
  symptoms: string
  onConsultDoctor: () => void
  onAskAnother: () => void
}

export function AIResponseScreen({ symptoms, onConsultDoctor, onAskAnother }: AIResponseScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-4 py-6 sm:py-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 flex items-center justify-center shadow-md">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Health Insights</h1>
          <p className="text-sm text-muted-foreground">Based on your symptoms</p>
        </div>
      </div>

      {/* Symptoms Summary */}
      <Card className="mb-4 shadow-md border-0 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50">
        <CardContent className="pt-4 pb-4 px-5">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 mt-0.5 text-teal-600 dark:text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div>
              <p className="text-xs text-teal-600 dark:text-teal-400 font-medium mb-1">Your Symptoms</p>
              <p className="text-sm text-teal-700 dark:text-teal-300">{symptoms}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Response Card */}
      <Card className="flex-1 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6 pb-6 px-5 sm:px-6 space-y-5">
          {/* Possible Conditions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-base font-semibold text-foreground">Possible Considerations</h3>
            </div>
            <div className="pl-7 space-y-2">
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Based on your symptoms, this could be related to common conditions such as:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-amber-600 dark:text-amber-400 list-disc list-inside">
                  <li>Viral infection or flu</li>
                  <li>Seasonal allergies</li>
                  <li>Mild respiratory condition</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Precautions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-base font-semibold text-foreground">Recommended Precautions</h3>
            </div>
            <div className="pl-7 space-y-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Get adequate rest and sleep (7-8 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Stay hydrated with water and warm fluids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Avoid strenuous physical activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Monitor your temperature regularly</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Basic Advice */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="text-base font-semibold text-foreground">Home Care Tips</h3>
            </div>
            <div className="pl-7">
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300">
                  Consider natural remedies like warm tea with honey, steam inhalation for congestion, 
                  and maintaining a comfortable room temperature. Over-the-counter medications may help 
                  with symptom relief, but always follow dosage instructions.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Disclaimer */}
      <Card className="mt-4 shadow-md border-0 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
        <CardContent className="pt-4 pb-4 px-5">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 mt-0.5 text-amber-600 dark:text-amber-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
              <span className="font-bold">Important:</span> This is not a medical diagnosis. 
              Please consult a doctor for confirmation and proper treatment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <Button
          onClick={onConsultDoctor}
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
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Consult Doctor
        </Button>
        <Button
          variant="outline"
          onClick={onAskAnother}
          className="w-full h-12 sm:h-14 text-base font-medium rounded-xl border-2 hover:bg-accent/50 transition-all duration-200"
        >
          <svg
            className="w-4 h-4 mr-2"
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
          Ask Another Question
        </Button>
      </div>
    </div>
  )
}
