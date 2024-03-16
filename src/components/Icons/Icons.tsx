import { lazy, memo, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamicSVGIconImports from "./SVGIcons";
import { Tooltip, Typography } from "@material-tailwind/react";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports | keyof typeof dynamicSVGIconImports;
  type?: "lucide" | "assets";
  isShowTooltip?: boolean;
}

const Icon = ({
  name,
  type = "lucide",
  isShowTooltip = undefined,
  ...props
}: IconProps) => {
  const LucideIcon = lazy(
    dynamicIconImports[name as keyof typeof dynamicIconImports]
  );

  const restProps = props;

  const AssetIcon = lazy(
    dynamicSVGIconImports[name as keyof typeof dynamicSVGIconImports]
  );

  const renderIcon = (type: string, props: typeof restProps) => {
    switch (type) {
      case "assets":
        return (
          <span className="cursor-pointer inline-block relative">
            <AssetIcon {...props} />
          </span>
        );
      default:
        return <LucideIcon {...props} />;
    }
  };

  const capitalize = (s: string) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  return (
    <Suspense fallback={fallback}>
      <Tooltip
        open={isShowTooltip}
        placement="bottom"
        content={
          <Typography
            className="text-sm"
            placeholder={capitalize(name.toString())}
          >
            {capitalize(name.toString())}
          </Typography>
        }
      >
        {renderIcon(type, props)}
      </Tooltip>
    </Suspense>
  );
};

export default memo(Icon);
