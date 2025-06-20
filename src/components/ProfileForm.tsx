
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PreferencesSection from "./PreferencesSection";
import LifestyleSection from "./LifestyleSection";
import HoroscopeSection from "./HoroscopeSection";

const ProfileForm = () => {
  return (
    <Card className="shadow-xl border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
        <CardTitle className="text-xl font-semibold">Profile Information</CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs defaultValue="preferences" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-none bg-gray-50 border-b">
            <TabsTrigger value="preferences" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Preferences
            </TabsTrigger>
            <TabsTrigger value="lifestyle" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Lifestyle
            </TabsTrigger>
            <TabsTrigger value="horoscope" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Horoscope
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="preferences" className="mt-0">
            <PreferencesSection />
          </TabsContent>
          
          <TabsContent value="lifestyle" className="mt-0">
            <LifestyleSection />
          </TabsContent>
          
          <TabsContent value="horoscope" className="mt-0">
            <HoroscopeSection />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
