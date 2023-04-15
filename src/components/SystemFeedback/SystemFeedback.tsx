import React, { ForwardRefExoticComponent, forwardRef } from "react";
import { SysteFeedbackProps } from "./SystemFeedback.types";

const defaultIcons = {
  error: "icon-error",
  success: "icon-bell",
  warning: "icon-warning-outline",
};

const SystemFeedback = () => <div></div>

// const SystemFeedback: ForwardRefExoticComponent<SysteFeedbackProps> =
//   forwardRef(
//     (
//       {
//         children,
//         type = "warning",
//         title,
//         message,
//         actions = [],
//         className,
//         icon,
//         onClose,
//         showCloseButton = false,
//         isClosed = false,
//         setClose,
//         ...props
//       },
//       ref
//     ) => {
//       const resolvedIcon = icon ? icon : defaultIcons[type] || default.warning;
//       const showActions = actions && actions.length > 0;
//       const [ firstAction, ...otherActions] = actions || [];
//       const isLegacyMode  = !!children && !title && showActions;
      

//     }
//   );

export default SystemFeedback;
