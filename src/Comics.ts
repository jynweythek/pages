import { Item } from './Item';
import Pages from './Pages';
import Page from './Page';

export default class Comics extends Item {
    protected title: string | undefined;
    protected author: string | undefined;
    protected artist: string | undefined;
    protected pages: Pages | undefined;
    protected page: Page | undefined;

    constructor();
    constructor(title: string, author: string, artist: string, pages: Pages);
    constructor(title?: string, author?: string, artist?: string, pages?: Pages) {
        super();
        this.title = title;
        this.artist = artist;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.get()}`;
    }
}
