import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import cannectLoading from "assets/gifs/cannect-loading.gif";
import * as Styles from "./styles";
import Text from "../Text";

interface propsLoading {
  loading: boolean;
}

function LoadingContainer({ loading }: propsLoading) {
  return (
    <span>
      {loading && (
        <Styles.Container>
          {/* <img src={cannectLoading} alt="" width="250px" height="250px" /> */}
          <Text type="md" color="primary" bold>
            CARREGANDO...
          </Text>
        </Styles.Container>
      )}
    </span>
  );
}

export default LoadingContainer;
