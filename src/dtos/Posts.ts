export interface IStrapiPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    content: string;
    author: {
      data: {
        id: number;
        attributes: {
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          createdAt: Date;
          updatedAt: Date;
          bio: string;
        };
      };
    };
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: {
            large: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string;
              size: number;
              width: number;
              height: number;
            };
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string;
              size: 27.37;
              width: 500;
              height: 333;
            };
            medium: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string;
              size: 52.53;
              width: 750;
              height: 500;
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string;
              size: number;
              width: number;
              height: number;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          provider_metadata: string;
          createdAt: Date;
          updatedAt: Date;
        };
      };
    };
    categories: {
      data: [
        {
          id: number;
          attributes: {
            name: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
          };
        }
      ];
    };
  };
}

export interface IGetAllPaginatedStrapiPostsResponse {
  data: Array<IStrapiPost>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
