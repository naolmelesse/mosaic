export const ART_QUERY = `
query{
    arts{
        data{
        attributes{
            name
            description
            slug
            price
            artist
            image{
            data{
                attributes{
                formats
                }
            }
            }
        }
        }
    }
    }
`;
export const GET_ART_QUERY = `
    query getArt($slug: String!){
        arts(filters: {slug: {eq: $slug}}){
            data{
                attributes{
                    name
                    description
                    slug
                    price
                    artist
                    image{
                    data{
                        attributes{
                        formats
                        }
                    }
                    }
                }
                }
        }
    }
`