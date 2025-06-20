
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PreferencesSection from "./PreferencesSection";
import LifestyleSection from "./LifestyleSection";
import HoroscopeSection from "./HoroscopeSection";

const ProfileForm = () => {
  return (
    <div className="space-y-10">
      {/* Preferences Section */}
      <Card className="shadow-2xl border-0 bg-white overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
        <CardHeader className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">💝</span>
              </div>
              Preferences & Partner Expectations
            </CardTitle>
            <p className="text-purple-100 mt-2 text-sm">
              Define your ideal partner characteristics and relationship preferences
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <PreferencesSection />
        </CardContent>
      </Card>

      {/* Lifestyle Section */}
      <Card className="shadow-2xl border-0 bg-white overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">🌱</span>
              </div>
              Lifestyle & Personal Habits
            </CardTitle>
            <p className="text-emerald-100 mt-2 text-sm">
              Share your daily habits, health preferences, and lifestyle choices
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <LifestyleSection />
        </CardContent>
      </Card>

      {/* Horoscope Section */}
      <Card className="shadow-2xl border-0 bg-white overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-700 text-white relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">⭐</span>
              </div>
              Horoscope & Astrological Details
            </CardTitle>
            <p className="text-indigo-100 mt-2 text-sm">
              Provide your birth details for astrological compatibility matching
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <HoroscopeSection />
        </CardContent>
      </Card>

      {/* Action Button Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Your Perfect Match?</h3>
        <p className="text-purple-100 mb-6 text-lg">
          Your detailed profile helps us connect you with compatible partners
        </p>
        <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
