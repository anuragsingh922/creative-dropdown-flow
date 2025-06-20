
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

interface FormFieldProps {
  label?: string;
  options: string[];
  defaultValue?: string;
  variant?: "default" | "purple" | "red";
  hideLabel?: boolean;
}

const FormField = ({ label, options, defaultValue, variant = "default", hideLabel = false }: FormFieldProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "purple":
        return "focus:ring-purple-500 focus:border-purple-500 data-[state=open]:ring-purple-500";
      case "red":
        return "focus:ring-red-500 focus:border-red-500 data-[state=open]:ring-red-500";
      default:
        return "focus:ring-blue-500 focus:border-blue-500 data-[state=open]:ring-blue-500";
    }
  };

  return (
    <div className="space-y-2">
      {!hideLabel && label && (
        <Label className="text-sm font-medium text-gray-700">{label}</Label>
      )}
      <Select defaultValue={defaultValue}>
        <SelectTrigger className={`w-full transition-all duration-200 hover:border-gray-400 ${getVariantStyles()}`}>
          <SelectValue placeholder="Select an option" />
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md z-50">
          {options.map((option, index) => (
            <SelectItem 
              key={index} 
              value={option}
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50 px-3 py-2"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormField;
