import api from "./api";

export interface Page {
    title?: {
      rendered?: string;
    };
    acf_blocks: unknown[];
    id: unknown;
    acf: unknown;
    data: {
      "title": {
        "rendered": string
      }
    }
}
  
export const PageService = async (slug: string): Promise<Page> => {
    try {
      const response = await api.get('/wp/v2/pages', {
        params: { slug },
      });
  
      if (response.data && response.data.length > 0) {
        return response.data[0];
      } else {
        throw new Error(`No page found with slug: ${slug}`);
      }
    } catch (error: unknown) {
      throw new Error(`Get Link by Slug Error: ${error}`);
    }
  };
  