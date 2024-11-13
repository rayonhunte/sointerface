import { __assign, __rest } from "tslib";
import React from 'react';
import { Button as NextUIButton } from '@nextui-org/react';
export var Button = function (_a) {
    var children = _a.children, _b = _a.customClassName, customClassName = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d, props = __rest(_a, ["children", "customClassName", "className", "type"]);
    return (React.createElement(NextUIButton, __assign({ className: "".concat(customClassName, " ").concat(className).trim(), type: type }, props), children));
};
export default Button;
//# sourceMappingURL=Button.js.map