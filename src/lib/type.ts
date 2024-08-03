import { BarProps } from "recharts";

export interface ListItemComponentProps {
    children: React.ReactNode;
    selected: boolean;
    onClick: () => void;
  }

export interface CardItemProps {
    title: string;
    value: string;
    icon: JSX.Element;
    percentage: string;
    iconBgColor: string;
    percentageColor: string;
    iconColor: string;
}

export interface FeedbackProps {
  name: string;
  image: string;
  feedback: string;
  rating: number;
}
 
export interface Data {
  name: string;
  pv: number;
  uv: number;
}
export interface CustomBarProps extends BarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FeatureSectionProps {
  title: string;
  iconBgColor: string;
  iconColor: string;
  icon: JSX.Element;
}