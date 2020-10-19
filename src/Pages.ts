import Page from './Page';

export default class Pages {
    pages: Page[];

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    get(): number;
    get(position: number): number;
    get(position?: number) {
        if (position) {
            return this.pages[position];
        } else {
            return this.pages.length;
        }
    }
}
