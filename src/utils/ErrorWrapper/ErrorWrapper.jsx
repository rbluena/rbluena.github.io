import React, { PureComponent } from "react";
import { logError } from "@app-utils/general";

class ErrorWrapper extends PureComponent {
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
    if (this.state.hasError) {
      return <h2>Error</h2>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorWrapper;
