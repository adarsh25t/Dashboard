
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
 