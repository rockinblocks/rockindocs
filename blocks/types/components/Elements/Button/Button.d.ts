import { FC } from "react";
export interface IButtonProps {
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    to?: string;
    onClick?: (event: MouseEvent) => void;
}
export declare const Button: FC<IButtonProps>;
