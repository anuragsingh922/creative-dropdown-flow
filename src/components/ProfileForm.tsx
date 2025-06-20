
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PreferencesSection from "./PreferencesSection";
import LifestyleSection from "./LifestyleSection";
import HoroscopeSection from "./HoroscopeSection";

const ProfileForm = () => {
  return (
    <div className="space-y-8">
      {/* Preferences Section */}
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
          <CardTitle className="text-xl font-semibold">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <PreferencesSection />
        </CardContent>
      </Card>

      {/* Lifestyle Section */}
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="text-xl font-semibold">Lifestyle</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <LifestyleSection />
        </CardContent>
      </Card>

      {/* Horoscope Section */}
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
          <CardTitle className="text-xl font-semibold">Horoscope Details</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <HoroscopeSection />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileForm;
