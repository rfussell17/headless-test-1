import Link from "next/link";
import Layout from "/components/Layout"; // make sure this path is correct

export default function Blog({ data }) {
  console.log(data);

  const post = data.map((post) => {
    return (
      <div key={post.id} className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
        <div
          className="prose max-w-none m-5 "
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
    );
  });

  return (
    <Layout>
      <main className="flex min-h-screen items-center justify-center p-24">
        <div className="z-10 w-full max-w-5xl font-mono text-sm">{post}</div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://nextjs-wordpress.local/wp-json/wp/v2/posts");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}
