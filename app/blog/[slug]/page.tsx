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
                </article>
            </main>

            <Footer />
        </div>
    );
}
