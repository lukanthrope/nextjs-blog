import App, { AppInitialProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '../redux/store';
import { RootDiv } from '../styles';

class WrappedApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RootDiv>
        <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height="3" />
        <Component {...pageProps} />
      </RootDiv>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
