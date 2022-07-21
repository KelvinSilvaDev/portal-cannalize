import { colorTypes } from "../utils/ColorTypes";

export interface IStrapiCategory {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface IGetAllCategoriesResponse {
  data: Array<IStrapiCategory>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
export interface IGetAllCategoriesByPostResponse {
  data: Array<IStrapiCategoryPosts>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IGetAllCategoriesHome {
  name: string;
  slug: string;
  color?: colorTypes;
  posts: [
    {
      publishedAt: Date;
      id: number;
      title: string;
      slug: string;
      createdAt: Date;
      updatedAt: Date;
      content: string;
      image: {
        id: number;
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
    }
  ];
}
export interface IStrapiCategoryPosts {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    content: string;
    image: IStrapiImages;
  };
}

export interface IStrapiPostsByCategory {
  id: number;
  attributes: {
    createdAt: Date;
    name: string;

    posts: {
      data: [
        {
          attributes: {
            title: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
            content: string;
          };
          id: string;
        }
      ];
    };
    publishedAt: Date;
    slug: string;
    updatedAt: Date;
  };
}

export interface IStrapiImages {
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
}

export interface IPostsByCategoryStrapiRequest {
  category?: string;
}
