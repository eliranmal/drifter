import React from 'react'

import './AppErrorBoundary.css'


class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: null,
      errorStackTrace: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      errorMessage: error.message,
      errorStackTrace: error.stack,
    }
  }

  // componentDidCatch(error, errorInfo) {
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return (
        <div className="drifter-app-error-view">
          <h1
            className="drifter-app-error-view-title"
          >{this.props.message ?? 'something\'s wrong :('}</h1>
          <div className="drifter-app-error-view-details">
            <label>message</label>
            <pre
              className="drifter-app-error-view-pre"
            >{this.state.errorMessage}</pre>
            <details>
              <summary>stack trace</summary>
              <pre
                className="drifter-app-error-view-pre drifter-app-error-view-stacktrace"
              >{this.state.errorStackTrace}</pre>
            </details>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}


export default AppErrorBoundary
