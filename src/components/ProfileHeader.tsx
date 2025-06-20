
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, User } from "lucide-react";

const ProfileHeader = () => {
  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-white">
      <div className="relative">
        {/* Profile Image */}
        <div className="aspect-[4/5] bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400 relative overflow-hidden">
          <img 
            src="/lovable-uploads/cfb4e6a9-2ccb-49bf-a1fe-0d6a20134952.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4">
            How other see
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Name and Basic Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">SANTOSH TANDROTHU</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <Mail className="w-4 h-4" />
              <span className="text-sm">anuragjadu922@gmail.com</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-3">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              32
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
              4'2"
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
              Never Married
            </Badge>
          </div>

          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200">
            ARYA VYSYA
          </Badge>

          {/* Contact Details */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Born: Feb 22, 1993</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Gurgaon, Haryana, India</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">+91 3472983543</span>
            </div>
          </div>

          {/* Membership Info */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <div className="text-xs text-gray-500">
              <span className="font-medium">Member Since:</span> Tuesday, May 13, 2025
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-medium">Last Updated:</span> Saturday, May 31, 2025
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
