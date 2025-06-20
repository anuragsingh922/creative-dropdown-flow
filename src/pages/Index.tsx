
import ProfileHeader from "../components/ProfileHeader";
import ProfileForm from "../components/ProfileForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 max-w-8xl relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 text-purple-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Profile Completion
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">
            Complete Your
            <span className="block mt-2">Perfect Profile</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Create a comprehensive profile that helps us find your ideal match. 
            <span className="block mt-2 text-purple-600 font-medium">Every detail brings you closer to your perfect partner.</span>
          </p>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: `${step * 0.2}s`}}></div>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-3">3 Sections to Complete</span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Profile Header - Enhanced positioning */}
          <div className="xl:col-span-2 order-2 xl:order-1">
            <div className="sticky top-8 space-y-6">
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <ProfileHeader />
              </div>
              
              {/* Additional info card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Profile Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Complete all sections for better matches</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Be honest about your preferences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Update regularly for fresh visibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Profile Form - Enhanced width */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
