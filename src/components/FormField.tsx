
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
        return "focus:ring-purple-500 focus:border-purple-500 data-[state=open]:ring-purple-500 border-purple-200";
      case "red":
        return "focus:ring-red-500 focus:border-red-500 data-[state=open]:ring-red-500 border-red-200";
      default:
        return "focus:ring-blue-500 focus:border-blue-500 data-[state=open]:ring-blue-500 border-gray-200";
    }
  };

  return (
    <div className="space-y-3">
      {!hideLabel && label && (
        <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${
            variant === "purple" ? "bg-purple-500" : 
            variant === "red" ? "bg-red-500" : "bg-blue-500"
          }`}></span>
          {label}
        </Label>
      )}
      <Select defaultValue={defaultValue}>
        <SelectTrigger className={`w-full h-12 transition-all duration-200 hover:border-gray-400 bg-white shadow-sm hover:shadow-md font-medium ${getVariantStyles()}`}>
          <SelectValue placeholder="Select an option" />
          <ChevronDown className="h-5 w-5 opacity-50" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-lg z-50 max-h-60">
          {options.map((option, index) => (
            <SelectItem 
              key={index} 
              value={option}
              className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50 px-4 py-3 font-medium transition-colors"
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
