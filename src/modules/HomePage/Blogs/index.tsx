"use client";

import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useMemo, useState } from "react";

type BlogCategoryModel =
  | "All"
  | "Quantum Computing"
  | "AI Ethics"
  | "Space Exploration"
  | "Biotechnology"
  | "Renewable Energy";

type BlogPostModel = {
  id: string;
  authorName: string;
  authorTopic: string;
  dateText: string;
  title: string;
  excerpt: string;
  stats: {
    likes: string;
    comments: string;
    shares: string;
  };
  category: Exclude<BlogCategoryModel, "All">;
};

const BLOG_CATEGORY_LIST: readonly BlogCategoryModel[] = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

const BLOG_POST_LIST: readonly BlogPostModel[] = [
  {
    id: "qc-1",
    authorName: "John Techson",
    authorTopic: "Quantum Computing",
    dateText: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    excerpt: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    stats: { likes: "24.5k", comments: "50", shares: "20" },
    category: "Quantum Computing",
  },
  {
    id: "ethics-1",
    authorName: "Sarah Ethicist",
    authorTopic: "AI Ethics",
    dateText: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    excerpt: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    stats: { likes: "32k", comments: "72", shares: "18" },
    category: "AI Ethics",
  },
  {
    id: "space-1",
    authorName: "Astronomer X",
    authorTopic: "Space Exploration",
    dateText: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    excerpt: "Exploring the technical and logistical challenges of human colonization on Mars.",
    stats: { likes: "20k", comments: "31", shares: "12" },
    category: "Space Exploration",
  },
];

type BlogListItemProp = {
  post: BlogPostModel;
};

function BlogStatPill({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}): React.ReactElement {
  return (
    <div className="bg-dark-10 border-dark-15 flex items-center gap-[4px] rounded-[100px] border px-[16px] py-[8px]">
      <div className="text-grey-60">{icon}</div>
      <Text as="span" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
        {value}
      </Text>
    </div>
  );
}

function BlogListItem({ post }: BlogListItemProp): React.ReactElement {
  return (
    <div className="border-dark-15 border-b py-[80px]">
      <Container className="flex gap-[50px]">
        <div className="flex w-[384px] items-center gap-[16px]">
          <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full bg-dark-15">
            <Image src="/pwa/192x192.png" alt="" fill sizes="80px" className="object-cover opacity-80" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <Text as="p" size={16} weight="semibold" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
              {post.authorName}
            </Text>
            <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
              {post.authorTopic}
            </Text>
          </div>
        </div>

        <div className="flex flex-1 items-center gap-[50px]">
          <div className="flex flex-1 flex-col gap-[30px]">
            <Text as="p" size={14} weight="semibold" color="grey-60" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
              {post.dateText}
            </Text>

            <div className="flex flex-col gap-[10px]">
              <Text as="h3" size={18} weight="semibold" color="white" className="desktop:text-[26px] desktop:tracking-[-0.78px]">
                {post.title}
              </Text>
              <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                {post.excerpt}
              </Text>
            </div>

            <div className="flex gap-[10px]">
              <BlogStatPill icon={<Heart className="h-6 w-6" strokeWidth={1.25} />} value={post.stats.likes} />
              <BlogStatPill icon={<MessageCircle className="h-6 w-6" strokeWidth={1.25} />} value={post.stats.comments} />
              <BlogStatPill icon={<Share2 className="h-6 w-6" strokeWidth={1.25} />} value={post.stats.shares} />
            </div>
          </div>

          <Link
            href="/"
            className="bg-dark-08 border-dark-15 text-grey-60 inline-flex h-[63px] items-center gap-[10px] rounded-[12px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
          >
            View Blog
            <ArrowUpRight className="h-6 w-6 text-yellow-55" strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </div>
  );
}

function Blogs(): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState<BlogCategoryModel>("All");

  const filteredList: readonly BlogPostModel[] = useMemo(() => {
    if (activeCategory === "All") return BLOG_POST_LIST;
    return BLOG_POST_LIST.filter((p: BlogPostModel) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="blogs">
      <div className="bg-dark-10 border-dark-15 border-y py-[120px]">
        <Container className="flex items-center justify-between gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <div className="bg-dark-20 w-fit rounded-[4px] px-[10px] py-[6px]">
              <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                A Knowledge Treasure Trove
              </Text>
            </div>
            <Text
              as="h2"
              size={30}
              weight="medium"
              color="white"
              font="heading"
              className="desktop:text-[58px] desktop:tracking-[-1.74px] text-[34px]/[1.3]"
            >
              Explore FutureTech&apos;s In-Depth Blog Posts
            </Text>
          </div>

          <Link
            href="/"
            className="bg-dark-08 border-dark-15 text-grey-60 inline-flex h-[63px] items-center gap-[10px] rounded-[12px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
          >
            View All Blogs
            <ArrowUpRight className="h-6 w-6 text-yellow-55" strokeWidth={1.5} />
          </Link>
        </Container>
      </div>

      <div className="border-dark-15 border-b py-[50px]">
        <Container className="flex gap-[20px]">
          {BLOG_CATEGORY_LIST.map((cat: BlogCategoryModel) => {
            const isActive: boolean = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "border-dark-15 flex flex-1 items-center justify-center rounded-[8px] border px-[24px] py-[30px] text-[18px]/[1.5] tracking-[-0.54px]",
                  isActive ? "bg-dark-10 text-white" : "text-grey-60",
                )}
              >
                {cat}
              </button>
            );
          })}
        </Container>
      </div>

      <div className="border-dark-15 border-t">
        {filteredList.map((post: BlogPostModel) => {
          return <BlogListItem key={post.id} post={post} />;
        })}
      </div>
    </section>
  );
}

export default Blogs;


