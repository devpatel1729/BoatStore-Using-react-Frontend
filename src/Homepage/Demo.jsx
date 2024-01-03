import React from 'react';

class ScrollToComponent extends React.Component {
  scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  scrollToPosition = () => {
    // Scroll to a specific position on the page (e.g., 500 pixels from the top)
    window.scrollTo(0, 500);
  };

  render() {
    return (
      <div>
        <h1>Scrolling Example</h1>
        <p></p>
        <button onClick={this.scrollToTop}>Scroll to Top</button>
        <button onClick={this.scrollToPosition}>Scroll to 500px</button>
      </div>
    );
  }
}

export default ScrollToComponent;
