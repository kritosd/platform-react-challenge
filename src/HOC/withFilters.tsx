import React, { useState } from "react";
import Container from "Components/Container";
import DropDown from "Components/Dropdown";
import Button from "Components/Button";

export enum ORDER {
  ASC = "ASC",
  DESC = "DESC",
  RAND = "RAND",
}

export interface WithFiltersProps {
  limit: number;
  page: number;
  order: string;
  setLoadMoreDisabled: (disable: boolean) => void;
}

const withFilters = <P extends WithFiltersProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: Omit<P, keyof WithFiltersProps>) => {
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [order, setOrder] = useState<string>(ORDER.ASC);
    const [loadMoreDisabled, setLoadMoreDisabled] = useState<boolean>(false);

    const handleChangePage = (value: number) => {
      setPage(value);
    };
    const handleChangeLimit = (value: number) => {
      setLimit(value);
      setPage(0);
    };
    const handleChangeOrder = (value: string) => {
      setOrder(value);
      setPage(0);
    };

    const handleLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
    };

    return (
      <Container>
        <div>
          <label key="itemperpage" style={{ marginLeft: "10px" }}>
            Items per Page:
            <DropDown
              values={[5, 10, 20, 50, 100]}
              value={limit}
              onChange={(e) => handleChangeLimit(Number(e.target.value))}
            />
          </label>
          <label key="order" style={{ marginLeft: "10px" }}>
            Order:
            <DropDown
              values={Object.values(ORDER)}
              value={order}
              onChange={(e) => handleChangeOrder(String(e.target.value))}
            />
          </label>
        </div>
        <WrappedComponent
          {...(props as P)}
          page={page}
          limit={limit}
          order={order}
          setLoadMoreDisabled={setLoadMoreDisabled}
        />
        <Button
          onClick={handleLoadMore}
          disabled={loadMoreDisabled}
          variant="contained"
        >
          Load More
        </Button>
      </Container>
    );
  };
};

export default withFilters;
