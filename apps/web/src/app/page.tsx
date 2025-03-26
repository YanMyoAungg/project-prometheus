"use client";

import Post from "@/components/post";
import { Container } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Container>
        <Post
          avatarUrl="https://example.com/avatar.jpg"
          userName="John Doe"
          timestamp="Just now"
          content="This is a sample post content. Enjoy building your app!"
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"
        />
      </Container>
    </>
  );
}
