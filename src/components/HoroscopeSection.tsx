
import FormField from "./FormField";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HoroscopeSection = () => {
  const monthOptions = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const amPmOptions = ["AM", "PM"];
  const rashiOptions = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const nakshatraOptions = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha"];

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-indigo-50 to-white">
      {/* Birth Details */}
      <div className="space-y-6">
        <div className="border-l-4 border-indigo-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Birth Details</h3>
          <p className="text-gray-600">Provide accurate birth information for horoscope matching</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-8">
          <div className="space-y-4">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Date of Birth
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-gray-500">Year</Label>
                <Input 
                  placeholder="1993" 
                  className="focus:ring-indigo-500 focus:border-indigo-500 text-center font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-gray-500">Month</Label>
                <FormField 
                  options={monthOptions}
                  defaultValue="February"
                  hideLabel
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-gray-500">Day</Label>
                <Input 
                  placeholder="22" 
                  className="focus:ring-indigo-500 focus:border-indigo-500 text-center font-medium"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Time of Birth
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-gray-500">Hour</Label>
                <Input 
                  placeholder="12" 
                  className="focus:ring-indigo-500 focus:border-indigo-500 text-center font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-gray-500">Minute</Label>
                <Input 
                  placeholder="30" 
                  className="focus:ring-indigo-500 focus:border-indigo-500 text-center font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-gray-500">AM/PM</Label>
                <FormField 
                  options={amPmOptions}
                  defaultValue="AM"
                  hideLabel
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Place of Birth
            </Label>
            <Input 
              placeholder="Enter your birth city and state/country" 
              className="focus:ring-indigo-500 focus:border-indigo-500 font-medium"
            />
          </div>
        </div>
      </div>

      {/* Astrological Information */}
      <div className="space-y-6 pt-6 border-t border-indigo-100">
        <div className="border-l-4 border-indigo-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Astrological Information</h3>
          <p className="text-gray-600">Additional details for comprehensive horoscope matching</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-6">
            <FormField 
              label="Rashi (Moon Sign)" 
              options={rashiOptions}
              defaultValue="Aquarius"
            />
            
            <FormField 
              label="Gotra"
              options={["Bharadwaj", "Kashyapa", "Vashishta", "Agastya", "Atri", "Jamadagni"]}
              defaultValue="Bharadwaj"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-6">
            <FormField 
              label="Nakshatra (Birth Star)" 
              options={nakshatraOptions}
              defaultValue="Punarvasu"
            />
            
            <FormField 
              label="Manglik Status"
              options={["Non-Manglik", "Manglik", "Anshik Manglik", "Unknown"]}
              defaultValue="Non-Manglik"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeSection;
