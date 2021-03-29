class Home {
    id!: number;
    address!: string;
    price!: number;
    // For all 3, we have to use ?;, this makes it optional, because our Typescript version is too new compared to Canvas videos
}
export default Home; // Exports here, in order for us to Import it in other classes
