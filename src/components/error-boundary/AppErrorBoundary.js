import React from 'react'

import Heading from '../heading/Heading'

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

  static getDerivedStateFromError = (error) => {
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
      return this.renderErrorView()
    }
    return this.props.children;
  }

  renderErrorView() {
    return (
      <div className="drifter-app-error-view">
        <Heading text={this.props.message ?? 'error'} />
        <div className="drifter-app-error-view-details-box">
          <label>message</label>
          <pre
            className="drifter-app-error-view-pre"
          >{this.state.errorMessage}</pre>
          <details
            className="drifter-app-error-view-details"
            open
          >
            <summary>stack trace</summary>
            <pre
              className="drifter-app-error-view-pre drifter-app-error-view-stacktrace"
            >{this.state.errorStackTrace}</pre>
          </details>
        </div>
      </div>
    )
  }
}


export default AppErrorBoundary
