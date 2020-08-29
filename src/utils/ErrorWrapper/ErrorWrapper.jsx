import React, { PureComponent, Children } from "react";
import { logError } from "@app-utils/general";

export class ErrorWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logError(error, errorInfo);
  }

  render() {
    return <>{this.state.hasError ? <h2>Error</h2> : this.props.children}</>;
  }
}

export default ErrorWrapper;
