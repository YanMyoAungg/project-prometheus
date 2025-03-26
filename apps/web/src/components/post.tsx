"use client";

import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FiThumbsUp, FiShare2, FiMessageCircle } from "react-icons/fi";
import React from "react";
import { Avatar } from "./ui/avatar";

type PostProps = {
  avatarUrl: string;
  userName: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
};

export default function Post({
  avatarUrl,
  userName,
  timestamp,
  content,
  imageUrl,
}: PostProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      p={4}
      mb={4}
      boxShadow="sm"
      mt={6}
    >
      {/* Header: Avatar, Name, Timestamp */}
      <Flex alignItems="center" mb={4}>
        <Avatar size="md" src={avatarUrl} name={userName} mr={4} />
        <Box>
          <Text fontWeight="bold">{userName}</Text>
          <Text fontSize="sm" color="gray.500">
            {timestamp}
          </Text>
        </Box>
      </Flex>

      {/* Post Content */}
      <Text mb={4}>{content}</Text>

      {/* Optional Post Image */}
      {imageUrl && (
        <Box mb={4}>
          <Image
            loading="lazy"
            src={imageUrl}
            alt="Post image"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
      )}

      {/* Action Buttons */}
      <Flex justifyContent="space-around" mt={2}>
        <IconButton variant="ghost" aria-label="Like">
          <FiThumbsUp />
        </IconButton>
        <IconButton variant="ghost" aria-label="Comment">
          <FiMessageCircle />
        </IconButton>
        <IconButton variant="ghost" aria-label="Share">
          <FiShare2 />
        </IconButton>
      </Flex>
    </Box>
  );
}
