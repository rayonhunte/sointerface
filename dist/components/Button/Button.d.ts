import React from 'react';
import { ButtonProps as NextUIButtonProps } from "@nextui-org/react";
export interface ButtonProps extends NextUIButtonProps {
    label: string;
}
export declare const Button: React.FC<ButtonProps>;
