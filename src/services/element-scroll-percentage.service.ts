import {Injectable} from '@angular/core';

type Target = Document | Element;

@Injectable({
  providedIn: 'root'
})
export class ElementScrollPercentageService {

  constructor() {
  }

  private static getCurrentScroll(node: Target) {
    if (node instanceof Document) {
      return window.pageYOffset;
    } else {
      return node.scrollTop;
    }
  }

  private static getMaxScroll(node: Target) {
    if (node instanceof Document) {
      const scrollHeight = Math.max(
        node.body.scrollHeight,
        node.body.offsetHeight,
        node.body.clientHeight,
        node.documentElement.scrollHeight,
        node.documentElement.offsetHeight,
        node.documentElement.clientHeight
      )
      const clientHeight = node.documentElement.clientHeight;
      return scrollHeight - clientHeight;
    } else {
      return node.scrollHeight - node.clientHeight;
    }
  }

  public getScroll(node: Target = document) {
    const currentScroll = ElementScrollPercentageService.getCurrentScroll(node);
    const maxScroll = ElementScrollPercentageService.getMaxScroll(node);
    let percent = (currentScroll / Math.max(maxScroll, 1));
    percent = Math.max(percent, 0);
    percent = Math.min(percent, 1);
    return Math.floor(percent * 100);
  }
}
