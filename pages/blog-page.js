import Layout from "../components/Layout";
// import Post from "../components/post";
// import { getAllPostsData } from "../lib/posts";

export default function Blog({}) {
  return (
    // <Layout title="Blog">
    //   <ul className="m-10">
    //     {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    //   </ul>
    // </Layout>
    <Layout title="Blog">
      <ul className="m-10">hello</ul>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const posts = await getAllPostsData();
//   return {
//     props: { posts },
//   };
// }
