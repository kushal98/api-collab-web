// tslint:disable:interface-name
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createBrowserHistory } from "history";

declare global {
  interface Window {
    dataLayer: any;
  }
}

const history = createBrowserHistory();

export default history;
