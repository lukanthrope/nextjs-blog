import App, { AppInitialProps } from 'next/app';
import { wrapper } from '../redux/store';
import { RootDiv } from '../styles';

class WrappedApp extends App<AppInitialProps> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <RootDiv>
        <Component {...pageProps} />
      </RootDiv>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
