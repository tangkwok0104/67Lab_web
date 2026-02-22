"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
    const params = useParams();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!params.slug) return;
            try {
                const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
                const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
                if (!supabaseUrl || !supabaseAnonKey) return;

                const res = await fetch(`${supabaseUrl}/rest/v1/blog_posts?slug=eq.${params.slug}&limit=1`, {
                    headers: { 'apikey': supabaseAnonKey }
                });

                if (res.ok) {
                    const data = await res.json();
                    if (data && data.length > 0) {
                        setPost(data[0]);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch dynamic post:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background pt-32 text-center text-muted-foreground">
                <Navbar />
                <p>Loading post...</p>
                <Footer />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-background pt-32 text-center">
                <Navbar />
                <h1 className="text-3xl font-bold">Post Not Found</h1>
                <Link href="/blog" className="mt-4 inline-flex items-center text-primary group">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="relative px-4 py-32">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_110%)]" />

                <article className="relative z-10 mx-auto max-w-4xl">
                    <Link href="/blog" className="mb-8 inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Link>

                    <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                        {post.title || "Automated Post"}
                    </h1>

                    <div className="mb-12 flex items-center gap-4 text-sm text-muted-foreground border-b border-primary/20 pb-8">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </div>
                        {post.platform && (
                            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                                via {post.platform}
                            </div>
                        )}
                    </div>

                    <div className="prose prose-invert max-w-none text-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80">
                        {/* We use ReactMarkdown since n8n may generate markdown content */}
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    {/* SEO: Social Sharing Options for Backlinks */}
                    <div className="mt-16 border-t border-primary/20 pt-8">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Share this insight</h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://67lab.ai/blog/${params.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-card/50 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z" />
                                </svg>
                                Share on X
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://67lab.ai/blog/${params.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-card/50 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                                Share on LinkedIn
                            </a>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
