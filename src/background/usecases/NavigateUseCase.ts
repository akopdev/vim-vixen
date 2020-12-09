import { inject, injectable } from "tsyringe";
import NavigateClient from "../clients/NavigateClient";
import TabPresenter from "../presenters/TabPresenter";

@injectable()
export default class NavigateUseCase {
  constructor(
    @inject("TabPresenter")
    private readonly tabPresenter: TabPresenter,
    @inject("NavigateClient")
    private readonly navigateClient: NavigateClient
  ) {}

  async openHistoryNext(): Promise<void> {
    const tab = await this.tabPresenter.getCurrent();
    await this.navigateClient.historyNext(tab.id!);
  }

  async openHistoryPrev(): Promise<void> {
    const tab = await this.tabPresenter.getCurrent();
    await this.navigateClient.historyPrev(tab.id!);
  }

  async openLinkNext(): Promise<void> {
    const tab = await this.tabPresenter.getCurrent();
    await this.navigateClient.linkNext(tab.id!);
  }

  async openLinkPrev(): Promise<void> {
    const tab = await this.tabPresenter.getCurrent();
    await this.navigateClient.linkPrev(tab.id!);
  }

  async openParent(): Promise<void> {
    const tab = await this.tabPresenter.getCurrent();
    const url = new URL(tab.url!);
    if (url.hash.length > 0) {
      url.hash = "";
    } else if (url.search.length > 0) {
      url.search = "";
    } else {
      const basenamePattern = /\/[^/]+$/;
      const lastDirPattern = /\/[^/]+\/$/;
      if (basenamePattern.test(url.pathname)) {
        url.pathname = url.pathname.replace(basenamePattern, "/");
      } else if (lastDirPattern.test(url.pathname)) {
        url.pathname = url.pathname.replace(lastDirPattern, "/");
      }
    }
    await this.tabPresenter.open(url.href);
  }

  async openRoot(): Promise<void> {
    const tab = await this.tabPresenter.getCurrent();
    const url = new URL(tab.url!);
    await this.tabPresenter.open(url.origin);
  }
}
