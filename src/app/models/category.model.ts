export class Category {
    name: string = "";
    dateOfCreation: Date = new Date();
    id?: number | undefined;
    children: Category[] = [];
    root: boolean = false;
    parentId?: number | undefined;
    numberChildren: number = 0;

    copy(): Category {
        return Object.assign(new Category(), this);
    }

    static fromJson(categoryJson: Category): Category {
        return Object.assign(new Category(), categoryJson);
    }

    toJson() : Category {
        return Object.assign({}, this);
    } 
}
