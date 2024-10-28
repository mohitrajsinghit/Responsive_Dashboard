import React from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

const Avatar = ({ src, name, size = "md", shape = "circle", ...props }) => {
  return (
    <ChakraAvatar
      src={src}
      name={name}
      size={size}
      borderRadius={shape === "rounded" ? "md" : "full"} // Control shape based on prop
      {...props}
    />
  );
};

export default Avatar;
