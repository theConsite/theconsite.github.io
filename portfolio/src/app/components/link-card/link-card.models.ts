export class LinkCardItem{
    public name: string;
    public url: string;
    public iconCode: string;
    constructor(name: string, url: string, path: string){
        this.name = name;
        this.url = url;
        this.iconCode = path;
    }
}