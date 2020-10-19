import { Item } from './Item';
import Pages from './Pages';

export default class Book extends Item {
    protected title: string | undefined;
    protected author: string | undefined;
    public pages: Pages | undefined;

    constructor();
    constructor(title: string, author: string, pages: Pages);
    constructor(title?: string, author?: string, pages?: Pages) {
        super();
        this.title = title;
        this.pages = pages;
        this.author = author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.get()}`;
    }
}
