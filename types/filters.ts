export type FiltersTypes = {
    result: ResultFIlterTYpes | null;
    loading: boolean;
    error: string;
  };
  
  export type ResultFIlterTYpes = {
    schema: {
      attributes: {
        origin: {
          enum: any;
        };
      };
    };
  };