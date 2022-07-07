import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../helpers/PostsUtil';

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
}

export default AllPostsPage;
