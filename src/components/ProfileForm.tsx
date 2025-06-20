
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PreferencesSection from "./PreferencesSection";
import LifestyleSection from "./LifestyleSection";
import HoroscopeSection from "./HoroscopeSection";
import { Heart, Sparkles, Star, CheckCircle } from "lucide-react";

const ProfileForm = () => {
  return (
    <div className="space-y-12">
      {/* Preferences Section */}
      <Card className="group shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
        <CardHeader className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10">
            <CardTitle className="text-2xl lg:text-3xl font-bold flex items-center gap-4 mb-2">
              <div className="p-2 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6" />
              </div>
              Partner Preferences & Expectations
            </CardTitle>
            <p className="text-purple-100 text-base leading-relaxed font-light">
              Define your ideal partner characteristics and build the foundation for meaningful connections
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                ))}
              </div>
              <span className="text-xs text-purple-200">Section 1 of 3</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <PreferencesSection />
        </CardContent>
      </Card>

      {/* Lifestyle Section */}
      <Card className="group shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
        <CardHeader className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-cyan-600/90"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full transform -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/5 rounded-full transform translate-x-14 translate-y-14"></div>
          
          <div className="relative z-10">
            <CardTitle className="text-2xl lg:text-3xl font-bold flex items-center gap-4 mb-2">
              <div className="p-2 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6" />
              </div>
              Lifestyle & Personal Journey
            </CardTitle>
            <p className="text-emerald-100 text-base leading-relaxed font-light">
              Share your daily habits, wellness practices, and life philosophy for authentic matching
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-white' : 'bg-white/40'}`}></div>
                ))}
              </div>
              <span className="text-xs text-emerald-200">Section 2 of 3</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <LifestyleSection />
        </CardContent>
      </Card>

      {/* Horoscope Section */}
      <Card className="group shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
        <CardHeader className="bg-gradient-to-br from-indigo-600 via-blue-700 to-violet-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-violet-700/90"></div>
          <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full transform translate-x-18 -translate-y-18"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <CardTitle className="text-2xl lg:text-3xl font-bold flex items-center gap-4 mb-2">
              <div className="p-2 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Star className="h-6 w-6" />
              </div>
              Astrological & Spiritual Details
            </CardTitle>
            <p className="text-indigo-100 text-base leading-relaxed font-light">
              Provide celestial information for deep compatibility analysis and spiritual alignment
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                ))}
              </div>
              <span className="text-xs text-indigo-200">Section 3 of 3</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <HoroscopeSection />
        </CardContent>
      </Card>

      {/* Enhanced Action Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 rounded-3xl p-8 lg:p-12 text-center shadow-2xl border border-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Find Your Soulmate?
            </h3>
            <p className="text-purple-100 mb-8 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Your comprehensive profile opens doors to meaningful connections.
              <span className="block mt-2 font-medium">Let's begin your journey to lasting love.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-purple-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-white/20">
                <span className="flex items-center space-x-2">
                  <span>Save & Find Matches</span>
                  <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
              
              <button className="text-white/90 hover:text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Save as Draft
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-purple-200 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Verified Profiles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
