import React, { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Pagination } from "@mui/material";

interface PaginationProps {
  page: number;
  totalResults: number;
  handlePaginationClick: (_: React.ChangeEvent<unknown>, value: number) => void;
}

const ListPagination: FC<PaginationProps> = ({
  page,
  totalResults,
  handlePaginationClick,
}) => {
  const isSmall = useMediaQuery("(min-width: 375px)");
  const isMedium = useMediaQuery("(min-width: 600px)");
  const isLarge = useMediaQuery("(min-width: 1000px)");

  const definePaginationSize = () => {
    if (isSmall && !isMedium) {
      return "medium";
    } else if (isMedium) {
      return "large";
    } else {
      return "small";
    }
  };

  return (
    <Grid container justifyContent="center">
      <Pagination
        count={Math.ceil(totalResults / 10)}
        size={definePaginationSize()}
        boundaryCount={isLarge ? 3 : 1}
        onChange={handlePaginationClick}
        page={page}
      />
    </Grid>
  );
};

export default ListPagination;
