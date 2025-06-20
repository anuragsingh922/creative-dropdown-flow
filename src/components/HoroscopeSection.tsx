
import FormField from "./FormField";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HoroscopeSection = () => {
  const monthOptions = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const amPmOptions = ["AM", "PM"];

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-purple-700 border-b border-purple-100 pb-2">
          Horoscope Details
        </h3>
        
        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-700">Date of Birth</Label>
          <div className="grid grid-cols-3 gap-4">
            <Input 
              placeholder="1993" 
              className="focus:ring-purple-500 focus:border-purple-500"
            />
            <FormField 
              options={monthOptions}
              defaultValue="February"
              hideLabel
            />
            <Input 
              placeholder="22" 
              className="focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-700">Time of Birth</Label>
          <div className="grid grid-cols-3 gap-4">
            <Input 
              placeholder="--" 
              className="focus:ring-purple-500 focus:border-purple-500"
            />
            <Input 
              placeholder="--" 
              className="focus:ring-purple-500 focus:border-purple-500"
            />
            <FormField 
              options={amPmOptions}
              defaultValue="AM"
              hideLabel
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-700">Place of Birth</Label>
          <Input 
            placeholder="Enter birth place" 
            className="focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Additional horoscope information */}
      <div className="space-y-6 pt-6 border-t border-gray-100">
        <h4 className="text-md font-medium text-gray-800">Additional Information</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField 
            label="Rashi" 
            options={["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]}
            defaultValue="Aquarius"
          />
          
          <FormField 
            label="Nakshatra" 
            options={["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya"]}
            defaultValue="Punarvasu"
          />
        </div>
      </div>
    </div>
  );
};

export default HoroscopeSection;
