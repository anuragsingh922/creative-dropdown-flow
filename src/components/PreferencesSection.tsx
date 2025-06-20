
import FormField from "./FormField";
import { Badge } from "@/components/ui/badge";

const PreferencesSection = () => {
  const casteOptions = [
    "Open to specific castes",
    "Any caste",
    "Same caste only",
    "Specific castes only"
  ];

  const horoscopeOptions = [
    "Flexible",
    "Must match",
    "Not important",
    "Preferred but not mandatory"
  ];

  const visaOptions = [
    "H1B", "Green Card", "OPT", "L1", "Other",
    "B1", "B2", "F1", "J1", "E1", "E2", "O1", "P1",
    "TN", "H2A", "H2B", "R1", "T1", "U1", "K1",
    "K3", "V"
  ];

  const locationOptions = [
    "India", "Germany", "United States", "Canada", "Australia", "UK"
  ];

  const kidsOptions = [
    "Yes", "No", "Maybe", "Open to discussion"
  ];

  const weddingOptions = [
    "Grand Affair: Large guest list including...",
    "Intimate: Close family and friends",
    "Simple: Minimal ceremony",
    "Traditional: Full customs and rituals"
  ];

  const financialOptions = [
    "No financial support needed",
    "Minimal support expected",
    "Regular support expected",
    "Full support expected"
  ];

  const giftOptions = [
    "Strictly No Gifts",
    "Simple gifts only",
    "Traditional gifts welcome",
    "Open to all gifts"
  ];

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-purple-50 to-white">
      {/* Partner Preferences */}
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Partner Preferences</h3>
          <p className="text-gray-600">Define your ideal partner characteristics</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FormField 
              label="Caste Preference" 
              options={casteOptions}
              defaultValue="Open to specific castes"
              variant="purple"
            />
            
            <FormField 
              label="Horoscope Preference" 
              options={horoscopeOptions}
              defaultValue="Flexible"
              variant="purple"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Specific Castes</label>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 hover:bg-purple-200 transition-colors">
                  INTERCASTE
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 hover:bg-purple-200 transition-colors">
                  ARYA VYSYA
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Location Preference</label>
              <div className="flex gap-2 flex-wrap">
                {locationOptions.slice(0, 3).map((location) => (
                  <Badge key={location} className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 hover:bg-blue-200 transition-colors">
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visa & Immigration */}
      <div className="space-y-6 pt-6 border-t border-purple-100">
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Visa & Immigration Status</h3>
          <p className="text-gray-600">Specify visa preferences for international matches</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
          <label className="text-sm font-semibold text-gray-700 mb-4 block">Visa Preference</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {visaOptions.map((visa) => (
              <Badge 
                key={visa} 
                variant={visa === "H1B" ? "default" : "outline"}
                className={`text-center justify-center py-2 transition-all duration-200 cursor-pointer ${
                  visa === "H1B" 
                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md" 
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200"
                }`}
              >
                {visa}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Life Expectations */}
      <div className="space-y-6 pt-6 border-t border-purple-100">
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Life & Family Expectations</h3>
          <p className="text-gray-600">Share your expectations about family life and future plans</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FormField 
              label="Kids in Future" 
              options={kidsOptions}
              defaultValue="Yes"
              variant="purple"
            />
            
            <FormField 
              label="Financial Support to Parents" 
              options={financialOptions}
              defaultValue="No financial support needed"
              variant="purple"
            />
          </div>
          
          <div className="space-y-6">
            <FormField 
              label="Wedding Expectation" 
              options={weddingOptions}
              defaultValue="Grand Affair: Large guest list including..."
              variant="purple"
            />
            
            <FormField 
              label="Opinion on Gifts" 
              options={giftOptions}
              defaultValue="Strictly No Gifts"
              variant="purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
