import { lazy, memo, Suspense } from "react";
import dynamicSVGIconImports, { IconType } from "./SVGIcons";
import { Tooltip, Typography } from "@material-tailwind/react";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconType;
  type?: "lucide" | "assets";
  isShowTooltip?: boolean;
}

const Icon = ({
  name,
  type = "assets",
  isShowTooltip = undefined,
  ...props
}: IconProps) => {
  const restProps = props;

  const AssetIcon = lazy(
    () =>
      dynamicSVGIconImports[name as IconType]() as Promise<{
        default: React.FC<React.SVGProps<SVGSVGElement>>;
      }>
  );

  const renderIcon = (type: string, props: typeof restProps) => {
    switch (type) {
      case "assets":
        return (
          <span className="cursor-pointer inline-block relative">
            <AssetIcon ref={null as any} {...props} />
          </span>
        );
      default:
        return <></>;
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
