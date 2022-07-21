/* eslint-disable prettier/prettier */
import { AxiosResponse } from "../../node_modules/axios/index";
import {
  IGetAllCategoriesByPostResponse,
  IGetAllCategoriesHome,
  IGetAllCategoriesResponse,
  IPostsByCategoryStrapiRequest,
} from "../dtos/Category";
//import { IGetAllPaginatedStrapiPostsRequest } from '../dtos/Posts'
// import {
//   IGetAllPaginatedStrapiFilteredPostsRequest,
//   IGetAllPaginatedStrapiPostsRequest,
//   any
// } from 'dtos/Posts'
import strapi from "../services/strapi";

export const getAllCategories =
  async (): Promise<IGetAllCategoriesResponse> => {
    const result: AxiosResponse<IGetAllCategoriesResponse> = await strapi.get(
      `/api/categories`
    );

    return result.data;
  };

export const getAllPostsByCategories = async (
  params: IPostsByCategoryStrapiRequest
): Promise<IGetAllCategoriesByPostResponse> => {
  const result: AxiosResponse<IGetAllCategoriesByPostResponse> =
    await strapi.get(
      `/api/posts?filters[$and][0][categories][slug][$eq]=${params.category}&populate=image`
    );

  return result.data;
};

export const getAllPostsPaginateByCategories = async (): Promise<
  IGetAllCategoriesHome[]
> => {
  const result: AxiosResponse<IGetAllCategoriesHome[]> = await strapi.get(
    `/api/category/test`
  );

  return result.data;
};
