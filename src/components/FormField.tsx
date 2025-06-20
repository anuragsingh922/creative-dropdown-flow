
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

interface FormFieldProps {
  label?: string;
  options: string[];
  defaultValue?: string;
  variant?: "default" | "purple" | "red" | "emerald" | "indigo";
  hideLabel?: boolean;
}

const FormField = ({ label, options, defaultValue, variant = "default", hideLabel = false }: FormFieldProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "purple":
        return "focus:ring-purple-500 focus:border-purple-500 data-[state=open]:ring-purple-500 border-purple-200/60 hover:border-purple-300";
      case "red":
        return "focus:ring-red-500 focus:border-red-500 data-[state=open]:ring-red-500 border-red-200/60 hover:border-red-300";
      case "emerald":
        return "focus:ring-emerald-500 focus:border-emerald-500 data-[state=open]:ring-emerald-500 border-emerald-200/60 hover:border-emerald-300";
      case "indigo":
        return "focus:ring-indigo-500 focus:border-indigo-500 data-[state=open]:ring-indigo-500 border-indigo-200/60 hover:border-indigo-300";
      default:
        return "focus:ring-blue-500 focus:border-blue-500 data-[state=open]:ring-blue-500 border-gray-200/60 hover:border-gray-300";
    }
  };

  const getVariantColor = () => {
    switch (variant) {
      case "purple": return "bg-purple-500";
      case "red": return "bg-red-500";
      case "emerald": return "bg-emerald-500";
      case "indigo": return "bg-indigo-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <div className="space-y-3 group">
      {!hideLabel && label && (
        <Label className="text-sm font-semibold text-gray-700 flex items-center gap-3 group-hover:text-gray-800 transition-colors">
          <span className={`w-2.5 h-2.5 rounded-full ${getVariantColor()} shadow-sm`}></span>
          {label}
        </Label>
      )}
      <Select defaultValue={defaultValue}>
        <SelectTrigger className={`w-full h-14 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg font-medium ${getVariantStyles()} rounded-xl border-2`}>
          <SelectValue placeholder="Select an option" className="text-gray-700" />
          <ChevronDown className="h-5 w-5 opacity-60 transition-transform group-hover:scale-110" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-md border-2 border-gray-200/60 shadow-2xl rounded-xl z-50 max-h-64">
          {options.map((option, index) => (
            <SelectItem 
              key={index} 
              value={option}
              className="cursor-pointer hover:bg-gray-50/80 focus:bg-gray-50/80 px-4 py-3.5 font-medium transition-all duration-200 rounded-lg mx-1 my-0.5"
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
