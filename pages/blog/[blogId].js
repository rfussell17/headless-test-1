import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { blogId } = router.query.blogId;
  console.log(blogId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Details</h1>
    </div>
  );
}
