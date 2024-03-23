export interface Gif {
    id: string;
    title: string;
    description: string;
    images: {
        original: {
            url: string;
        };
    };
}