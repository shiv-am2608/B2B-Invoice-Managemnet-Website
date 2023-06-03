import React, { useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import InceptionTable from "../views/MyTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inception: {
    width: "100%",
    height: "100%",
    marginTop: "50px",
    margin: "auto"
  }
});

function InceptionScroll() {
  let [responseData, setResponseData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(0);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/1805428/dummy.do?page=${pageCount}&method=display`
      );
      setResponseData([...responseData, ...response.data]);
      isNextFunc(true);
    } catch (error) {
      console.log(error);
    }
  }, [pageCount]);

  function fetchMoreData() {
    setCount(pageCount + 1);
  }

  const classes = useStyles();

  return (
    <div className={classes.inception}>
      <div>
        <InfiniteScroll
          dataLength={responseData.length}
          next={fetchMoreData}
          hasMore={isNext}
          scrollableTarget="scrollableDiv"
        >
          <div>
            <InceptionTable responseData={responseData} />
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
export default InceptionScroll;
