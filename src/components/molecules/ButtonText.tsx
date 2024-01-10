import { Button, ButtonProps } from "@components/atoms/Button";
import { CustomText } from "@components/atoms/CustomText";

interface ButtonTextProps extends ButtonProps {
  text: string;
}

export const ButtonText = ({ text, ...props }: ButtonTextProps) => {
  return (
    <Button {...props}>
      <CustomText text={text} />
    </Button>
  );
};
