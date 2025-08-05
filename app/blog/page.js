import BlogComponent from "@/components/BlogComponent";

export const metadata = {
  title: "Blog",
};

export default function contactUS() {
  return (
    <>
      <div className="text-justify font-mono">
        <BlogComponent/>
      </div>
    </>
  );
}
