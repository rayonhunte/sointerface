import React from 'react';
import { ButtonProps } from '@nextui-org/react';
export interface CustomButtonProps extends ButtonProps {
    customClassName?: string;
}
export declare const Button: React.FC<CustomButtonProps>;
export default Button;
