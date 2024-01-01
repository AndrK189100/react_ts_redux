export type Item = {
    id?: string;
    item: string;
    price: string;
}

export type Action = {
    type: string;
    payload: Item & string;
}

