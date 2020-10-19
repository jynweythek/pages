import { Item } from './Item';
import Pages from './Pages';

export default class Magazine extends Item {
    protected title: string | undefined;
    protected pages: Pages | undefined;

    constructor();
    constructor(title: string, pages: Pages);
    constructor(title?: string, pages?: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages}`;
    }
}
