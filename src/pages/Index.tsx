
import ProfileHeader from "../components/ProfileHeader";
import ProfileForm from "../components/ProfileForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Your Profile
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us create the perfect match by providing detailed information about yourself and your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Profile Header - Optimized for visual balance */}
          <div className="xl:col-span-4">
            <div className="sticky top-8">
              <ProfileHeader />
            </div>
          </div>
          
          {/* Profile Form - Takes more space for better content flow */}
          <div className="xl:col-span-8">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
