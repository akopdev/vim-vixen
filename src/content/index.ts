import "reflect-metadata";

import Application from "./Application";
import Bootstrap from "./Bootstrap";
import consoleFrameStyle from "./site-style";
import { ConsoleFramePresenterImpl } from "./presenters/ConsoleFramePresenter";
import { container } from "tsyringe";
import "./di";

const initDom = () => {
  if (window.self === window.top) {
    new ConsoleFramePresenterImpl().initialize();
  }

  try {
    const app = container.resolve(Application);
    app.run();
  } catch (e) {
    console.error(e);
  }

  const style = window.document.createElement("style");
  style.textContent = consoleFrameStyle;
  window.document.head.appendChild(style);
};

const bootstrap = new Bootstrap();
if (bootstrap.isReady()) {
  initDom();
} else {
  bootstrap.waitForReady(() => initDom());
}
