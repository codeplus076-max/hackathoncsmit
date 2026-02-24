"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type Props = {
    onComplete: (data: any) => void;
};

export default function Chatbot({ onComplete }: Props) {
    const t = useTranslations('Chatbot');

    const [age, setAge] = useState<number | ''>('');
    const [gender, setGender] = useState<number>(0);
    const [duration, setDuration] = useState<number | ''>('');
    const [symptoms, setSymptoms] = useState<Record<string, number>>({
        fever: 0,
        cough: 0,
        fatigue: 0,
        headache: 0,
        nausea: 0,
        diarrhea: 0,
        muscle_pain: 0,
        difficulty_breathing: 0,
        chest_pain: 0
    });

    const [loading, setLoading] = useState(false);

    const toggleSymptom = (sym: string) => {
        setSymptoms(prev => ({
            ...prev,
            [sym]: prev[sym] === 1 ? 0 : 1
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        // Call the backend API
        try {
            const response = await fetch('http://localhost:8000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    age: Number(age) || 30,
                    gender,
                    duration_days: Number(duration) || 1,
                    symptoms,
                    language: 'en' // Pass locale if needed by backend, currently hardcoded
                })
            });

            const data = await response.json();
            onComplete(data);
        } catch (error) {
            console.error("Prediction error:", error);
            alert("Error connecting to the backend. Is it running?");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{t('welcome')}</h2>

            <div className="space-y-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('age_prompt')}</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g. 45"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('gender_prompt')}</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(Number(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                        <option value={0}>{t('female')}</option>
                        <option value={1}>{t('male')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('duration_prompt')}</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value ? Number(e.target.value) : '')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g. 3"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Symptoms:</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.keys(symptoms).map(sym => (
                        <button
                            key={sym}
                            onClick={() => toggleSymptom(sym)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${symptoms[sym] === 1
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-[1.02]'
                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                                }`}
                        >
                            {sym.replace('_', ' ').charAt(0).toUpperCase() + sym.replace('_', ' ').slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
                {loading ? t('analyzing') : t('submit')}
            </button>
        </div>
    );
}
