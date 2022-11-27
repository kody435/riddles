
export interface Collection {
    [x: string]: ReactNode;
    title: string;
    url: string;
    description: string;
    slug: {
        current: string;
    };
    image: string;
}