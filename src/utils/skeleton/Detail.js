import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function HomePage(props) {
  let skeletonEle = "";
  for (let index = 0; index < 5; index++) {
    skeletonEle +=
      "<Skeleton width={500}/><Skeleton/><Skeleton/><Skeleton/><p></p>";
  }
  return (
    <>
      <div className="row">
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} baseColor={"#2183A2"} align={"center"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} />
            <Skeleton className="col align-self-center " width={"50%"} />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#2183A2"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#2183A2"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#2183A2"} />
          <Skeleton height={1} baseColor={"#2183A2"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#2183A2"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#2183A2"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
