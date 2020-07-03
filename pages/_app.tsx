import App, { AppInitialProps, AppContext } from 'next/app';
import { wrapper } from '../redux/store';
import { RootDiv } from '../styles';

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        appProp: ctx.pathname,
      },
    };
  };

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
