
import ProfileHeader from "../components/ProfileHeader";
import ProfileForm from "../components/ProfileForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Profile Header - Left Column */}
          <div className="xl:col-span-2">
            <ProfileHeader />
          </div>
          
          {/* Profile Form - Right Columns */}
          <div className="xl:col-span-3">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
