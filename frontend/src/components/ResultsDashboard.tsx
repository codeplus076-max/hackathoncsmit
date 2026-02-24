"use client";

import { useTranslations } from 'next-intl';

type PredictionItem = {
    disease: string;
    probability: number;
};

type ResultsProps = {
    data: {
        predictions: PredictionItem[];
        risk_level: string;
        urgency: string;
        first_aid: string[];
        explanation: string[];
        emergency: boolean;
    };
    onReset: () => void;
};

export default function ResultsDashboard({ data, onReset }: ResultsProps) {
    const t = useTranslations('Results');

    // Risk color mapping
    const getRiskColors = (level: string, isEmergency: boolean) => {
        if (isEmergency) return "bg-red-100 text-red-800 border-red-300";
        switch (level) {
            case "High": return "bg-orange-100 text-orange-800 border-orange-300";
            case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
            default: return "bg-green-100 text-green-800 border-green-300";
        }
    };

    const riskClasses = getRiskColors(data.risk_level, data.emergency);
    const displayRisk = data.emergency ? t('emergency') : (t(data.risk_level.toLowerCase() as any) || data.risk_level);

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">{t('title')}</h2>
                <div className={`px-4 py-2 rounded-full font-bold border ${riskClasses}`}>
                    {t('risk_level')} {displayRisk}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold text-lg mb-4 text-gray-700">{t('possible_conditions')}</h3>
                    <div className="space-y-4">
                        {data.predictions.map((p, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-gray-800">{p.disease}</span>
                                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                        {(p.probability * 100).toFixed(1)}% Match
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: `${p.probability * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                        <h3 className="font-semibold text-lg text-blue-800 mb-2">{t('guidance')}</h3>
                        <p className="text-blue-900 font-medium">{data.urgency}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('first_aid')}</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {data.first_aid.map((aid, idx) => (
                                <li key={idx}>{aid}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('explanation')}</h3>
                        <p className="text-gray-600 italic">
                            {data.explanation.join(" ")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={onReset}
                    className="w-full md:w-auto px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-bold shadow-sm hover:bg-gray-50 transition-all"
                >
                    {t('back')}
                </button>
            </div>
        </div>
    );
}
