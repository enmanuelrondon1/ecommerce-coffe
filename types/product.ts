export type ProductType = {
    id: number;
    attributes: {
      productName: string;
      slug: string;
      description: string;
      active: boolean;
      isFeactured: boolean;
      taste: string;
      origin: string;
      price: number;
      images: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        }[];
      };
      category: {
        data: {
          attributes: {
            slug: string;
            categoryName: string;
          };
        };
      };
    };
  };